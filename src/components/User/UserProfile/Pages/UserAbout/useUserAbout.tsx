import useQueryCustom from "@/hooks/useQueryCustom";
import { IUser } from "@/types/IUser";
import { useParams } from "react-router";

const useUserAbout = () => {
	const { id } = useParams<{ id: string }>();

	const { data: user } = useQueryCustom<IUser | null>({
		queryKey: ["user", id],
		queryUrl: `users/${id}`,
	});

	return { user };
};

export default useUserAbout;
