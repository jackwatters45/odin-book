import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface UseDialogProps {
	isModal?: boolean;
	initial?: boolean;
	reset?: () => void;
}

const useDialog = ({ isModal = true, initial = false, reset }: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const [isOpen, setIsOpen] = useState(initial);

	const closeDialog = useCallback(() => {
		ref.current?.close();
		setIsOpen(false);
	}, []);

	const openDialog = useCallback(() => {
		if (reset) reset();

		if (isOpen) return;

		setIsOpen(true);
		setTimeout(() => (isModal ? ref.current?.showModal() : ref.current?.show()), 0);
	}, [reset, isOpen, isModal]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const isClickOutside =
				ref.current &&
				!ref.current.contains(e.target as Node) &&
				!ref.current.parentElement?.contains(e.target as Node);

			if (isClickOutside) closeDialog();
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [closeDialog]);

	useLayoutEffect(() => {
		if (initial) openDialog();
	}, [initial, openDialog]);

	return {
		ref,
		openDialog,
		closeDialog,
		isOpen,
		setIsOpen,
	};
};

export default useDialog;
