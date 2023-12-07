import { useParams } from "react-router";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { IUser } from "@/types/IUser";
import useContainerWidth from "../../context/useContainerWidth";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

const useUserAbout = () => {
	const { id } = useParams<{ id: string }>();

	const { data: user } = useQueryCustom<IUser | null>({
		queryKey: ["user", id],
		queryUrl: `users/${id}`,
	});

	const containerWidth = useContainerWidth();

	const { isOwnProfile } = useProfileStatus();

	return { user, containerWidth, isOwnProfile };
};

export default useUserAbout;
