import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Dashboard = () => {
	const { handleClickLogout } = useLogout();

	return (
		<div>
			<h1>Dashboard</h1>
			<Link to="/login">Login</Link>
			<Link to="/create-account">Create Account</Link>
			<Link to="/recover">Forgot Password</Link>
			<button onClick={handleClickLogout}>Logout</button>
		</div>
	);
};

export default Dashboard;
