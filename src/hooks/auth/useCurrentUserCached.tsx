import { IUser } from "@/types/IUser";
import { useQueryClient } from "@tanstack/react-query";

const useCurrentUserCached = (): IUser | undefined => {
	const queryClient = useQueryClient();
	return queryClient.getQueryData(["currentUser"]);
};

export default useCurrentUserCached;
