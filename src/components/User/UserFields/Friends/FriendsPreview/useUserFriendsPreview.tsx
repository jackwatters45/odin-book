import useQueryCustom from "@/hooks/useQueryCustom";
import { useParams } from "react-router";

export type UserFriendPreview = {
	id: string;
	fullName: string;
	avatarUrl: string;
}[];

const useUserFriendsPreview = () => {
	const { id: userId } = useParams<{ id: string }>();

	const { data: friends } = useQueryCustom<UserFriendPreview>({
		queryUrl: `users/${userId}/friends?limit=9`,
		queryKey: ["user", userId, "friends"],
	});

	return {
		friends,
		userId,
	};
};

export default useUserFriendsPreview;
