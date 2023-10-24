import { Outlet } from "react-router-dom";

import Nav from "../../../components/Nav";
import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";

import PostForm from "@/components/Post/PostForm";

const Layout = () => {
	const { isDialogOpen } = usePostFormContext();

	return (
		<>
			<Nav />
			<Outlet />
			<>{isDialogOpen && <PostForm />}</>
		</>
	);
};

export default Layout;
