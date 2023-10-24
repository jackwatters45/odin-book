import { useNavigate, useParams } from "react-router";

import { IUser } from "../../../types/IUser";
import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";

const useUserProfile = () => {
	const { id } = useParams<{ id: string }>();

	const navigate = useNavigate();
	if (!id) navigate("/404");

	const { data, error, isLoading, isError, isSuccess } = useQueryCustom<IUser | null>({
		queryKey: ["user", id],
		queryUrl: `users/${id}`,
	});

	return { user: data, error, isLoading, isError, isSuccess };
};

export default useUserProfile;
