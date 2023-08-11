import ProtectedRoute from "./ProtectedRoute";
import useCurrentUser from "../../hooks/useCurrentUser";

const AuthRoute = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoute isAllowed={!user} redirectPath="/" />;
};

export default AuthRoute;
