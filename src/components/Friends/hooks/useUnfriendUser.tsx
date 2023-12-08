import { useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";

interface UseSendFriendRequest {
	id: string;
}

const useUnfriendUser = ({ id }: UseSendFriendRequest) => {
	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friends/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friends: prevData.friends.filter((friend) => friend !== id),
					  }
					: prevData;
			});
		},
	});

	return () => mutate({});
};

export default useUnfriendUser;
