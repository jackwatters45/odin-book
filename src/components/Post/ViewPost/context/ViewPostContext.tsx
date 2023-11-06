import { RefObject, createContext } from "react";

export interface HandleOpenDialogProps {
	postId: string;
	authorName: string;
}

interface ViewPostContextReturn {
	ref: RefObject<HTMLDialogElement>;
	closeDialog: () => void;
	openDialog: ({ postId }: HandleOpenDialogProps) => void;
	isOpen: boolean;
	postId: string;
	authorName: string;
}

const ViewPostContext = createContext<ViewPostContextReturn | undefined>(undefined);

export default ViewPostContext;
