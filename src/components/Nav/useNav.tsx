import useLogout from "../../hooks/useLogout";
import useCurrentUser from "../../hooks/useCurrentUser";
import useCreatePostContext from "../Post/CreatePost/context/useCreatePostContext";

const useNav = () => {
	const { handleClickLogout } = useLogout();

	const { currentUser, isSuccess } = useCurrentUser();

	const { openDialog } = useCreatePostContext();

	return {
		handleClickLogout,
		user: currentUser,
		isSuccess,
		openDialog,
	};
};

export default useNav;
