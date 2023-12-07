import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

import useLogout from "@/hooks/auth/useLogout";

const useProfileDropdownContent = () => {
	const userId = useCurrentUserCached()?._id;

	const { handleClickLogout } = useLogout();

	return { userId, handleClickLogout };
};

export default useProfileDropdownContent;
