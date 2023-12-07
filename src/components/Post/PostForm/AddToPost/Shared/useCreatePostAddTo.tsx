import { InitialOpenedState, InitialOpenedStateFields } from "../../types/PostFormTypes";
import useDialog from "@/hooks/dialogs/useDialog";

interface useCreatePostAddToProps {
	initialOpenedState: InitialOpenedState;
	field: InitialOpenedStateFields;
}

const useCreatePostAddTo = ({
	initialOpenedState = undefined,
	field,
}: useCreatePostAddToProps) => {
	const isOpenByDefault = initialOpenedState === field;

	return useDialog({ initial: isOpenByDefault });
};

export default useCreatePostAddTo;
