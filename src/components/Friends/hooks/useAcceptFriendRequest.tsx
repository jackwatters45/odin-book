import { useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";

interface UseAcceptFriendRequest {
	id: string;
}

const useAcceptFriendRequest = ({ id }: UseAcceptFriendRequest) => {
	const queryClient = useQueryClient();

	const { mutate: accept } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/accept`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friends: prevData.friends ? [...prevData.friends, id] : [id],
							friendRequestsReceived: prevData.friendRequestsReceived.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});
		},
	});
	return () => accept({});
};

export default useAcceptFriendRequest;
