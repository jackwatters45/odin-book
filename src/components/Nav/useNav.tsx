import useLogout from "../../hooks/useLogout";
import useCurrentUser from "../../hooks/useCurrentUser";

const useNav = () => {
	const { handleClickLogout } = useLogout();

	const { currentUser, isSuccess } = useCurrentUser();

	return {
		handleClickLogout,
		user: currentUser,
		isSuccess,
	};
};

export default useNav;
