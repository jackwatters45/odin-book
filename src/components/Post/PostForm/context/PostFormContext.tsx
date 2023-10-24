import { RefObject, createContext } from "react";

import { HandleOpenDialogProps } from "./PostFormProvider";
import { InitialOpenedState, PostValues } from "../types/PostFormTypes";
import { IPost } from "@/types/IPost";

export interface PostFormInitialValues extends PostValues {
	sharedFrom?: IPost;
}

interface PostFormContextReturn {
	ref: RefObject<HTMLDialogElement>;
	closeDialog: () => void;
	openDialog: ({ initialValues, initialOpenedState }: HandleOpenDialogProps) => void;
	isDialogOpen: boolean;
	initialOpenedState: InitialOpenedState | undefined;
	initialValues: PostFormInitialValues | undefined;
	isEditing: boolean;
}

const PostFormContext = createContext<PostFormContextReturn | undefined>(undefined);

export default PostFormContext;
