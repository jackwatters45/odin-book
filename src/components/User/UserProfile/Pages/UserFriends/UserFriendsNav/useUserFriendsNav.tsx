import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

const useUserFriendsNav = () => {
	const { isOwnProfile } = useProfileStatus();

	const currentUser = useCurrentUserCached();

	const showMutualFriends = !isOwnProfile;

	const showCollege =
		currentUser?.education?.findIndex((e) => e.type === "college") !== -1;

	const showCurrentCity =
		currentUser?.placesLived?.findIndex((l) => l.type === "current") !== -1;

	const showHometown =
		currentUser?.placesLived?.findIndex((l) => l.type === "hometown") !== -1;

	return {
		showMutualFriends,
		showCollege,
		showCurrentCity,
		showHometown,
	};
};

export default useUserFriendsNav;
