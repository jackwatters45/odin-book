import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const AuthRoute = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoutes isAllowed={!user} redirectPath="/" />;
};

export default AuthRoute;
