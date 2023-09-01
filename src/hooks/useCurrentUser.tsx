import { useQuery } from "@tanstack/react-query";
import { IUser } from "../types/IUser";
import { apiBaseUrl } from "../config/envVariables";

const fetchCurrentUser = async (): Promise<IUser | null> => {
	const res = await fetch(`${apiBaseUrl}/auth/current-user`, {
		method: "GET",
		credentials: "include",
	});
	const json = await res.json();
	if (!res.ok) throw json.message;

	const { isAuthenticated, user } = json;

	return isAuthenticated ? user : null;
};

const useCurrentUser = () => {
	const { data, error, isLoading, isError, isSuccess } = useQuery({
		queryKey: ["currentUser"],
		queryFn: fetchCurrentUser,
	});

	return { user: data, error, isLoading, isError, isSuccess };
};

export default useCurrentUser;
