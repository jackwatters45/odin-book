import { useNavigate, useParams } from "react-router";

import { IUser } from "../../../types/IUser";
import useQueryCustom from "@/hooks/useQueryCustom";

type JsonResponse = {
	user: IUser | null;
};

const useUserProfile = () => {
	const { id } = useParams<{ id: string }>();

	const navigate = useNavigate();
	if (!id) navigate("/404");

	const { data, error, isLoading, isError, isSuccess } = useQueryCustom<
		JsonResponse,
		IUser | null
	>({
		queryKey: ["user", id],
		queryUrl: `users/${id}`,
		transformData: ({ user }) => user,
	});

	return { user: data, error, isLoading, isError, isSuccess };
};

export default useUserProfile;
