import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { IUser } from "../../../../types/IUser";
import { apiBaseUrl } from "../../../../config/envVariables";

const fetchUser = async (id: string | undefined): Promise<IUser | null> => {
	if (!id) return null; // TODO

	const res = await fetch(`${apiBaseUrl}/users/${id}`, {
		method: "GET",
		credentials: "include",
	});
	const json = await res.json();
	if (!res.ok) throw json.message;

	const { user } = json;

	return user;
};

const useUserProfile = () => {
	const { id } = useParams();

	const { data, error, isLoading, isError, isSuccess } = useQuery({
		queryKey: ["user", id],
		queryFn: () => fetchUser(id),
	});

	return { user: data, error, isLoading, isError, isSuccess };
};

export default useUserProfile;
