import { Outlet } from "react-router-dom";
import Nav from "../../../components/Nav";
import CreatePost from "@/components/Post/CreatePost";

const Layout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<CreatePost initialOpenedState={undefined} initialValues={undefined} />
		</>
	);
};

export default Layout;
