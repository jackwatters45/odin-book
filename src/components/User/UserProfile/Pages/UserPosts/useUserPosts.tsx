import { useOutletContext } from "react-router";

import { IUser } from "@/types/IUser";
import useLazyLoad from "@/hooks/useLazyLoad";

const useUserPosts = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const { LazyWrapper } = useLazyLoad({});

	return { user, LazyWrapper };
};

export default useUserPosts;
