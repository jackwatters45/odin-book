import { ReactNode, useState } from "react";

import useDialog from "@/hooks/useDialog";
import CreatePostContext from "./CreatePostContext";
import { CreatePostFormValues, InitialOpenedState } from "../types/CreatePostTypes";

interface CreatePostProviderProps {
	children: ReactNode;
}

export interface HandleOpenDialogProps {
	initialValues: CreatePostFormValues | undefined;
	initialOpenedState: InitialOpenedState | undefined;
}

const CreatePostProvider = ({ children }: CreatePostProviderProps) => {
	const { openDialog: openCreatePostDialog, ...rest } = useDialog({});

	const [initialOpenedState, setInitialOpenedState] = useState<
		InitialOpenedState | undefined
	>(undefined);

	const [initialValues, setInitialValues] = useState<CreatePostFormValues | undefined>(
		undefined,
	);

	const openDialog = ({ initialValues, initialOpenedState }: HandleOpenDialogProps) => {
		setInitialValues(initialValues);
		setInitialOpenedState(initialOpenedState);

		setTimeout(() => {
			openCreatePostDialog();
		}, 50);
	};

	const createPostHookValue = {
		...rest,
		openDialog,
		initialOpenedState,
		initialValues,
	};

	return (
		<CreatePostContext.Provider value={createPostHookValue}>
			{children}
		</CreatePostContext.Provider>
	);
};

export default CreatePostProvider;
