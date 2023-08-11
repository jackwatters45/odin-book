import useCurrentUser from "../../hooks/useCurrentUser";
import ProtectedRoute from "./ProtectedRoute";

const AuthRoute = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoute isAllowed={!user} redirectPath="/" />;
};

export default AuthRoute;
