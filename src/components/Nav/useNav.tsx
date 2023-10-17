import useLogout from "../../hooks/useLogout";
import useCurrentUser from "../../hooks/useCurrentUser";
import useCreatePostContext from "../Post/CreatePost/context/useCreatePostContext";

const useNav = () => {
	const { handleClickLogout } = useLogout();

	const { currentUser, isSuccess } = useCurrentUser();

	const { openDialog } = useCreatePostContext();

	const openCreatePostDialog = () => {
		openDialog({ initialValues: undefined, initialOpenedState: undefined });
	};

	return {
		handleClickLogout,
		user: currentUser,
		isSuccess,
		openCreatePostDialog,
	};
};

export default useNav;
