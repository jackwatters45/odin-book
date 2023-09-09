import { useOutletContext } from "react-router";

import { IUser } from "@/types/IUser";

const useUserPosts = () => {
	return useOutletContext<{ user: IUser }>();
};

export default useUserPosts;
