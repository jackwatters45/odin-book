import { ReactNode, useState } from "react";

import useDialog from "@/hooks/useDialog";
import PostFormContext, { PostFormInitialValues } from "./PostFormContext";
import { InitialOpenedState } from "../types/PostFormTypes";

interface PostFormProviderProps {
	children: ReactNode;
}

export interface HandleOpenDialogProps {
	initialValues: PostFormInitialValues | undefined;
	initialOpenedState: InitialOpenedState | undefined;
	isEditing?: boolean;
}

const PostFormProvider = ({ children }: PostFormProviderProps) => {
	const {
		ref,
		openDialog: openPostFormDialog,
		closeDialog: closePostFormDialog,
	} = useDialog({});

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const [initialOpenedState, setInitialOpenedState] = useState<
		InitialOpenedState | undefined
	>(undefined);

	const [initialValues, setInitialValues] = useState<PostFormInitialValues | undefined>(
		undefined,
	);

	const [isEditing, setIsEditing] = useState(false);

	const openDialog = ({
		initialValues,
		initialOpenedState,
		isEditing = false,
	}: HandleOpenDialogProps) => {
		setInitialValues(initialValues);
		setInitialOpenedState(initialOpenedState);
		setIsDialogOpen(true);
		setIsEditing(isEditing);

		setTimeout(() => {
			openPostFormDialog();
		}, 50);
	};

	const closeDialog = () => {
		closePostFormDialog();
		setIsDialogOpen(false);
	};

	const PostFormHookValue = {
		ref,
		closeDialog,
		openDialog,
		isDialogOpen,
		initialOpenedState,
		initialValues,
		isEditing,
	};

	return (
		<PostFormContext.Provider value={PostFormHookValue}>
			{children}
		</PostFormContext.Provider>
	);
};

export default PostFormProvider;
