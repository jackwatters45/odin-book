import { RefObject, createContext } from "react";

import { HandleOpenDialogProps } from "./CreatePostProvider";
import { CreatePostFormValues, InitialOpenedState } from "../types/CreatePostTypes";

interface CreatePostContextReturn {
	ref: RefObject<HTMLDialogElement>;
	closeDialog: () => void;
	openDialog: ({ initialValues, initialOpenedState }: HandleOpenDialogProps) => void;
	initialOpenedState: InitialOpenedState | undefined;
	initialValues: CreatePostFormValues | undefined;
}

const CreatePostContext = createContext<CreatePostContextReturn | undefined>(undefined);

export default CreatePostContext;
