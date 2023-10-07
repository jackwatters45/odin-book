import { IUser } from "@/types/IUser";
import { useQueryClient } from "@tanstack/react-query";

const useCurrentUserCached = () => {
	const queryClient = useQueryClient();
	return queryClient.getQueryData(["currentUser"]) as IUser;
};

export default useCurrentUserCached;
