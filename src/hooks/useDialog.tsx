import { useCallback, useEffect, useRef } from "react";

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

	const openDialog = useCallback(() => {
		if (reset) reset();
		return isModal ? ref.current?.showModal() : ref.current?.show();
	}, [isModal, reset]);

	const closeDialog = useCallback(() => {
		ref.current?.close();
	}, []);

	useEffect(() => {
		if (isOpenByDefault) openDialog();
	}, [isOpenByDefault, openDialog]);

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
