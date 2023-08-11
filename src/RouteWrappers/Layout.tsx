import { Outlet } from "react-router-dom";
import NavComponent from "../components/Nav/NavComponent";

const Layout = () => {
	return (
		<>
			<NavComponent />
			<Outlet />
		</>
	);
};

export default Layout;
