import useCurrentUserCached from "@/hooks/useCurrentUserCached";

const usePostCommentInput = () => {
	const currentUser = useCurrentUserCached();

	const userAvatarUrl = currentUser?.avatarUrl;
	const userName = currentUser?.fullName;

	return {
		userAvatarUrl,
		userName,
	};
};

export default usePostCommentInput;
