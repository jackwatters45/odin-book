import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { useParams } from "react-router";
import { IFriendsDisplay } from "../types/FriendsTypes";

const useFetchFriends = () => {
	const { id: userId } = useParams<{ id: string }>();

	const { data: friends } = useQueryCustom<IFriendsDisplay>({
		queryUrl: `users/${userId}/friends?limit=9`,
		queryKey: ["user", userId, "friends"],
	});

	return {
		friends,
		userId,
	};
};

export default useFetchFriends;
