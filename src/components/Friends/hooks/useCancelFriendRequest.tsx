import { useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";

interface UseCancelFriendRequest {
	id: string;
}

const useCancelFriendRequest = ({ id }: UseCancelFriendRequest) => {
	const queryClient = useQueryClient();

	const { mutate: cancel } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsSent: prevData.friendRequestsSent.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});
		},
	});
	return () => cancel({});
};

export default useCancelFriendRequest;
