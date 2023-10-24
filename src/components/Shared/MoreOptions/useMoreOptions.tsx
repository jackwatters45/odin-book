import useDialog from "@/hooks/useDialog";

interface UseMoreOptionsProps {
	deleteMutation: (() => void) | undefined;
}

const useMoreOptions = ({ deleteMutation }: UseMoreOptionsProps) => {
	const { ref, openDialog, closeDialog } = useDialog({
		isModal: false,
	});

	const handleDelete = () => {
		deleteMutation?.();
		closeDialog();
	};

	return {
		ref,
		openDialog,
		handleDelete,
	};
};

export default useMoreOptions;
