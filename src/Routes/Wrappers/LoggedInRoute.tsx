import ProtectedRoute from "./ProtectedRoute";
import useCurrentUser from "../../hooks/useCurrentUser";

const LoggedInRoute = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoute isAllowed={!!user} redirectPath="/login" />;
};

export default LoggedInRoute;
