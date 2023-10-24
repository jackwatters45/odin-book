import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

interface UseSendFriendRequest {
	id: string;
}

const useUnfriendUser = ({ id }: UseSendFriendRequest) => {
	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friends/${id}`,
		method: "DELETE",
	});

	return () => mutate({});
};

export default useUnfriendUser;
