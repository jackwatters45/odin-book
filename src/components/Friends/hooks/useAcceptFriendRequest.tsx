import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";

interface UseAcceptFriendRequest {
	id: string;
}

// TODO change name link
const useAcceptFriendRequest = ({ id }: UseAcceptFriendRequest) => {
	const { mutate: accept } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/accept`,
		method: "POST",
	});
	return () => accept({});
};

export default useAcceptFriendRequest;
