import { useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";

interface UseRejectFriendRequest {
	id: string;
}

const useRejectFriendRequest = ({ id }: UseRejectFriendRequest) => {
	const queryClient = useQueryClient();

	const { mutate: reject } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/reject`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsReceived: prevData.friendRequestsReceived.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});
		},
	});
	return () => reject({});
};

export default useRejectFriendRequest;
