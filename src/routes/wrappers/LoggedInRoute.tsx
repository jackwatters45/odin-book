import useCurrentUser from "../../hooks/useCurrentUser";
import ProtectedRoute from "./ProtectedRoute";

const LoggedInRoute = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoute isAllowed={!!user} redirectPath="/login" />;
};

export default LoggedInRoute;
