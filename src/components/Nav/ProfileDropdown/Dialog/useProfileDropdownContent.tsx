import useCurrentUserCached from "@/hooks/useCurrentUserCached";

import useLogout from "@/hooks/useLogout";

const useProfileDropdownContent = () => {
	const userId = useCurrentUserCached()?._id;

	const { handleClickLogout } = useLogout();

	return { userId, handleClickLogout };
};

export default useProfileDropdownContent;
