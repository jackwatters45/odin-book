import useLogout from "../../hooks/useLogout";
import useCurrentUser from "../../hooks/useCurrentUser";
import useCreatePostContext from "../Post/PostForm/context/usePostFormContext";
import { useMatch } from "react-router";

const useNav = () => {
	const { handleClickLogout } = useLogout();

	const { currentUser, isSuccess } = useCurrentUser();

	const { openDialog } = useCreatePostContext();

	const openCreatePostDialog = () => {
		openDialog({ initialValues: undefined, initialOpenedState: undefined });
	};

	const isDashboardActive = useMatch("/");
	const isFriendsActive = useMatch("/friends");
	const isNotificationsActive = useMatch("/notifications");

	return {
		handleClickLogout,
		user: currentUser,
		isSuccess,
		openCreatePostDialog,
		isDashboardActive,
		isFriendsActive,
		isNotificationsActive,
	};
};

export default useNav;
