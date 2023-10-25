import { RefObject, createContext } from "react";

export interface HandleOpenDialogProps {
	postId: string;
}

interface ViewPostContextReturn {
	ref: RefObject<HTMLDialogElement>;
	closeDialog: () => void;
	openDialog: ({ postId }: HandleOpenDialogProps) => void;
	isOpen: boolean;
	postId: string;
}

const ViewPostContext = createContext<ViewPostContextReturn | undefined>(undefined);

export default ViewPostContext;
