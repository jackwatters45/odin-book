import { InitialOpenedState, InitialOpenedStateFields } from "../../types/PostFormTypes";
import useDialog from "@/hooks/useDialog";

interface useCreatePostAddToProps {
	initialOpenedState: InitialOpenedState;
	field: InitialOpenedStateFields;
}

const useCreatePostAddTo = ({
	initialOpenedState = undefined,
	field,
}: useCreatePostAddToProps) => {
	const isOpenByDefault = initialOpenedState === field;

	return useDialog({ isOpenByDefault });
};

export default useCreatePostAddTo;
