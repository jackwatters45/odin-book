import useDialog from "@/hooks/useDialog";

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
