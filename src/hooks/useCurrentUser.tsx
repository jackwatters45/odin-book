import useQueryCustom from "./useQueryCustom";
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
		transformData: (res) => {
			const { isAuthenticated, user } = res;

			console.log(res);
			return isAuthenticated ? user : null;
		},
	});

	return { user: data, error, isLoading, isError, isSuccess };
};

export default useCurrentUser;
