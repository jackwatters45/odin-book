import { Link, useLocation } from "react-router-dom";

const UnauthorizedPage = ({ message }: { message?: string }) => {
	const location = useLocation();
	const { from } = location.state || { from: "/" };

	return (
		<div>
			<h1>You are not authorized to view this page.</h1>
			{message && <h2>{message}</h2>}
			<p>
				If you are an admin,{" "}
				<Link to="/login" state={{ from }}>
					login to view this page.
				</Link>
			</p>
			<p>
				Otherwise, <Link to="/">return home</Link>
			</p>
		</div>
	);
};

export default UnauthorizedPage;
