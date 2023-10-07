import { useParams } from "react-router";
import useCurrentUserCached from "./useCurrentUserCached";

const useIsOwnProfile = () => {
	const { id } = useParams<{ id: string }>() as { id: string };

	const currentUser = useCurrentUserCached();

	return currentUser?._id === id;
};

export default useIsOwnProfile;
