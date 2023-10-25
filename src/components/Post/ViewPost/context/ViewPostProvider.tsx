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

	const openDialog = ({ postId }: HandleOpenDialogProps) => {
		setPostId(postId);

		openViewPostDialog();
	};

	const closeDialog = () => closeViewPostDialog();

	const ViewPostHookValue = {
		ref,
		closeDialog,
		openDialog,
		isOpen,
		postId,
	};

	return (
		<ViewPostContext.Provider value={ViewPostHookValue}>
			{children}
		</ViewPostContext.Provider>
	);
};

export default ViewPostProvider;
