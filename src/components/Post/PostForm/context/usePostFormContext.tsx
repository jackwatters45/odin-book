import { useContext } from "react";
import PostFormContext from "./PostFormContext";

const usePostFormContext = () => {
	const context = useContext(PostFormContext);
	if (context === undefined) {
		throw new Error("usePostFormContext must be used within a CreatePostProvider");
	}
	return context;
};

export default usePostFormContext;
