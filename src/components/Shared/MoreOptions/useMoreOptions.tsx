import useDialog from "@/hooks/useDialog";

interface UseMoreOptionsProps {
	deleteMutation: (() => void) | undefined;
}

const useMoreOptions = ({ deleteMutation }: UseMoreOptionsProps) => {
	const { ref, openDialog, closeDialog } = useDialog({
		isModal: false,
	});

	const isUsingDialog = !!deleteMutation;

	const handleDelete = () => {
		deleteMutation?.();
		closeDialog();
	};

	return { ref, openDialog, isUsingDialog, handleDelete };
};

export default useMoreOptions;
