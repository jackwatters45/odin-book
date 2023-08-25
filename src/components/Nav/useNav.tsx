import useLogout from "../../hooks/useLogout";
import useCurrentUser from "../../hooks/useCurrentUser";

const useNav = () => {
	const { handleClickLogout } = useLogout();

	const { user, isSuccess } = useCurrentUser();

	return {
		handleClickLogout,
		user,
		isSuccess,
	};
};

export default useNav;
