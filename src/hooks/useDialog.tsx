import { useRef } from "react";

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

	const closeDialog = () => {
		ref.current?.close();
	};

	return { ref, openDialog, closeDialog };
};

export default useDialog;
