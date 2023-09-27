import useCurrentUser from "@/hooks/useCurrentUser";

const usePostCommentInput = () => {
	const { user } = useCurrentUser();

	const userAvatarUrl = user?.avatarUrl;
	const userName = user?.fullName;

	return {
		userAvatarUrl,
		userName,
	};
};

export default usePostCommentInput;
