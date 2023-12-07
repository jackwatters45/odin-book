import useDialog from "@/hooks/dialogs/useDialog";

const useNavDropdown = () => {
	const { ref, openDialog, closeDialog, isOpen } = useDialog({
		isModal: false,
	});

	return {
		ref,
		openDialog,
		closeDialog,
		isOpen,
	};
};

export default useNavDropdown;
