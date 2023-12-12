import useContainerWidth from "@/components/User/UserProfile/context/useContainerWidth";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const useFriendsList = () => {
	const currentUserId = useCurrentUserCached()?._id;
	const containerWidth = useContainerWidth();

	return { currentUserId, containerWidth };
};

export default useFriendsList;
