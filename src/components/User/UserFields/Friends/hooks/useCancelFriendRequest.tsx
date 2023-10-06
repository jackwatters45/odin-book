import useMutateCustom from "@/hooks/useMutateCustom";

interface UseCancelFriendRequest {
	id: string;
}

const useCancelFriendRequest = ({ id }: UseCancelFriendRequest) => {
	const { mutate: cancel } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "DELETE",
	});
	return () => cancel({});
};

export default useCancelFriendRequest;
