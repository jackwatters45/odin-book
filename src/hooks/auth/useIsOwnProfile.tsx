import { useParams } from "react-router";
import useCurrentUserCached from "./useCurrentUserCached";

const useProfileStatus = () => {
	const { id } = useParams<{ id: string }>() as { id: string };

	const currentUser = useCurrentUserCached();

	const isOwnProfile = currentUser?._id === id;

	const isFriend = currentUser?.friends?.some((friend) => friend === id);

	return {
		isOwnProfile,
		isFriend,
	};
};

export default useProfileStatus;
