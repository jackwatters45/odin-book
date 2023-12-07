import { Outlet } from "react-router-dom";

import Nav from "../../../components/Nav";
import PostForm from "@/components/Post/PostForm";
import ViewPost from "@/components/Post/ViewPost";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";

const Layout = () => {
	const { isPostFormOpen, isViewPostOpen } = useDialogsContext();

	return (
		<>
			<Nav />
			<Outlet />
			<>
				{isPostFormOpen && <PostForm />}
				{isViewPostOpen && <ViewPost />}
			</>
		</>
	);
};

export default Layout;
