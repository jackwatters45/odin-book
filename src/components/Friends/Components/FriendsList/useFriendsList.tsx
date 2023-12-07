import useContainerWidth from "@/components/User/UserProfile/context/useContainerWidth";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const useFriendsList = () => {
	const currentUser = useCurrentUserCached();
	const containerWidth = useContainerWidth();

	return { currentUser, containerWidth };
};

export default useFriendsList;
