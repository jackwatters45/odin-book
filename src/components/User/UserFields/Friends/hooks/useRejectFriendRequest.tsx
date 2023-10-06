import useMutateCustom from "@/hooks/useMutateCustom";

interface UseRejectFriendRequest {
	id: string;
}

const useRejectFriendRequest = ({ id }: UseRejectFriendRequest) => {
	const { mutate: reject } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/reject`,
		method: "DELETE",
	});
	return () => reject({});
};

export default useRejectFriendRequest;
