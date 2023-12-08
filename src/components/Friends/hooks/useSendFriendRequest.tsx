import { useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";

interface UseSendFriendRequest {
	id: string;
}

const useSendFriendRequest = ({ id }: UseSendFriendRequest) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsSent: prevData.friendRequestsSent
								? [...prevData.friendRequestsSent, id]
								: [id],
					  }
					: prevData;
			});
		},
	});

	return () => mutate({});
};

export default useSendFriendRequest;
