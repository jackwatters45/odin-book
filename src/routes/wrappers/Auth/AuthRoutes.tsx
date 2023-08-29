import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const AuthRoute = () => {
	const { user } = useCurrentUser();

	console.log("redirect from page to login to dashboard", user);

	return <ProtectedRoutes isAllowed={!user} redirectPath="/" />;
};

export default AuthRoute;
