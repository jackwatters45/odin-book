import { useCallback, useEffect, useRef } from "react";

interface UseDialogProps {
	isModal?: boolean;
	reset?: () => void;
}

const useDialog = ({ isModal = true, reset }: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const openDialog = () => {
		if (reset) reset();
		return isModal ? ref.current?.showModal() : ref.current?.show();
	};

	const closeDialog = useCallback(() => {
		ref.current?.close();
	}, []);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) closeDialog();
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeDialog]);

	return { ref, openDialog, closeDialog };
};

export default useDialog;
