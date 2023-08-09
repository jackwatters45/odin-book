import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Link to="/login">Login</Link>
			<Link to="/create-account">Create Account</Link>
		</div>
	);
};

export default Dashboard;
