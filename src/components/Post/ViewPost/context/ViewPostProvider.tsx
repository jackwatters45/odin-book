import { ReactNode, useState } from "react";

import useDialog from "@/hooks/useDialog";
import ViewPostContext, { HandleOpenDialogProps } from "./ViewPostContext";

interface ViewPostProviderProps {
	children: ReactNode;
}

const ViewPostProvider = ({ children }: ViewPostProviderProps) => {
	const {
		ref,
		openDialog: openViewPostDialog,
		closeDialog: closeViewPostDialog,
		isOpen,
	} = useDialog({});

	const [postId, setPostId] = useState("");
	const [authorName, setAuthorName] = useState("");

	const openDialog = ({ postId, authorName }: HandleOpenDialogProps) => {
		setPostId(postId);
		setAuthorName(authorName);

		openViewPostDialog();
	};

	const closeDialog = () => closeViewPostDialog();

	const ViewPostHookValue = {
		ref,
		closeDialog,
		openDialog,
		isOpen,
		postId,
		authorName,
	};

	return (
		<ViewPostContext.Provider value={ViewPostHookValue}>
			{children}
		</ViewPostContext.Provider>
	);
};

export default ViewPostProvider;
