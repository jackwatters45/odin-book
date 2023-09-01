import { useRef } from "react";

const useDialog = (isModal = true) => {
	const ref = useRef<HTMLDialogElement>(null);

	const openDialog = () => {
		return isModal ? ref.current?.showModal() : ref.current?.show();
	};

	const closeDialog = () => {
		ref.current?.close();
	};

	return { ref, openDialog, closeDialog };
};

export default useDialog;
