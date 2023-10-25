import { Outlet } from "react-router-dom";

import Nav from "../../../components/Nav";
import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";

import PostForm from "@/components/Post/PostForm";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";
import ViewPost from "@/components/Post/ViewPost";

const Layout = () => {
	const { isOpen: isPostFormOpen } = usePostFormContext();
	const { isOpen: isViewPostOpen } = useViewPostContext();

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
