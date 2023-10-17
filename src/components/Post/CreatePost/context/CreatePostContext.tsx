import { createContext } from "react";

import useDialog from "@/hooks/useDialog";

const CreatePostContext = createContext<ReturnType<typeof useDialog> | undefined>(
	undefined,
);

export default CreatePostContext;
