import { useContext } from "react";
import CreatePostContext from "./CreatePostContext";

const useCreatePostContext = () => {
	const context = useContext(CreatePostContext);
	if (context === undefined) {
		throw new Error("useCreatePostContext must be used within a CreatePostProvider");
	}
	return context;
};

export default useCreatePostContext;
