import { useMatch } from "react-router";

import useCreatePostContext from "../Post/PostForm/context/usePostFormContext";

const useNav = () => {
	const { openDialog } = useCreatePostContext();

	const openCreatePostDialog = () => {
		openDialog({ initialValues: undefined, initialOpenedState: undefined });
	};

	const isDashboardActive = !!useMatch("/");
	const isFriendsActive = !!useMatch("/friends/*");
	const isNotificationsActive = !!useMatch("/notifications/*");

	return {
		openCreatePostDialog,
		isDashboardActive,
		isFriendsActive,
		isNotificationsActive,
	};
};

export default useNav;
