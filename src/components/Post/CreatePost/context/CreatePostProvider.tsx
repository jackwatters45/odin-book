import { ReactNode } from "react";

import useDialog from "@/hooks/useDialog";
import CreatePostContext from "./CreatePostContext";

interface CreatePostProviderProps {
	children: ReactNode;
}

const CreatePostProvider = ({ children }: CreatePostProviderProps) => {
	const createPostHookValue = useDialog({});
	return (
		<CreatePostContext.Provider value={createPostHookValue}>
			{children}
		</CreatePostContext.Provider>
	);
};

export default CreatePostProvider;
