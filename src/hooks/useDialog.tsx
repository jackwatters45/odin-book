import { useCallback, useEffect, useRef, useState } from "react";

interface UseDialogProps {
	isModal?: boolean;
	isOpenByDefault?: boolean;
	reset?: () => void;
}

const useDialog = ({
	isModal = true,
	isOpenByDefault = false,
	reset,
}: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	const openDialog = useCallback(() => {
		if (reset) reset();

		setIsOpen(true);

		setTimeout(() => (isModal ? ref.current?.showModal() : ref.current?.show()), 0);
	}, [isModal, reset]);

	const closeDialog = useCallback(() => {
		setIsOpen(false);
		ref.current?.close();
	}, []);

	useEffect(() => {
		if (isOpenByDefault) {
			setIsOpen(true);
			openDialog();
		}
	}, [isOpenByDefault, openDialog]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				closeDialog();
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeDialog, isOpen]);

	return { ref, openDialog, closeDialog, isOpen, setIsOpen };
};

export default useDialog;
