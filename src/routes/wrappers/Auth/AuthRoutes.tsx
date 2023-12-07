import useCurrentUser from "../../../hooks/auth/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const AuthRoute = () => {
	const { currentUser } = useCurrentUser();

	return <ProtectedRoutes isAllowed={!currentUser} redirectPath="/" />;
};

export default AuthRoute;
