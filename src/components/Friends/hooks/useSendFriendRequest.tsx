import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

interface UseSendFriendRequest {
	id: string;
}

const useSendFriendRequest = ({ id }: UseSendFriendRequest) => {
	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "POST",
	});

	return () => mutate({});
};

export default useSendFriendRequest;
