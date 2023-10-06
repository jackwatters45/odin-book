import useMutateCustom from "@/hooks/useMutateCustom";

interface UseAcceptFriendRequest {
	id: string;
}

const useAcceptFriendRequest = ({ id }: UseAcceptFriendRequest) => {
	const { mutate: accept } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/accept`,
		method: "POST",
	});
	return () => accept({});
};

export default useAcceptFriendRequest;
