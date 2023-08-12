import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const LoggedInRoutes = () => {
	const { user } = useCurrentUser();

	return <ProtectedRoutes isAllowed={!!user} redirectPath="/login" />;
};

export default LoggedInRoutes;
