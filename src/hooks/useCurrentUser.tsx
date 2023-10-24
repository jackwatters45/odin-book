import useQueryCustom from "./reactQuery/useQueryCustom";
import { IUser } from "../types/IUser";

type JsonResponse = {
	isAuthenticated: boolean;
	user: IUser | null;
};

type FnReturnType = IUser | null;

const useCurrentUser = () => {
	const { data, error, isLoading, isError, isSuccess } = useQueryCustom<
		JsonResponse,
		FnReturnType
	>({
		queryKey: ["currentUser"],
		queryUrl: "auth/current-user",
		allowErrors: true,
		transformData: ({ isAuthenticated, user }) => {
			return isAuthenticated ? user : null;
		},
	});

	return { currentUser: data, error, isLoading, isError, isSuccess };
};

export default useCurrentUser;
