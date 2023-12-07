import useDialog from "@/hooks/dialogs/useDialog";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";

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

	const { isPostFormOpen, isViewPostOpen } = useDialogsContext();

	return {
		ref,
		openDialog,
		closeDialog,
		handleDelete,
		isPostFormOpen,
		isViewPostOpen,
	};
};

export default useMoreOptions;
