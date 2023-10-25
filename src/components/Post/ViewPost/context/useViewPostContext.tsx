import { useContext } from "react";
import ViewPostContext from "./ViewPostContext";

const useViewPostContext = () => {
	const context = useContext(ViewPostContext);
	if (context === undefined) {
		throw new Error("useViewPostContext must be used within a CreatePostProvider");
	}
	return context;
};

export default useViewPostContext;
