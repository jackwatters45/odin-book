import ProtectedRoute from "./ProtectedRoute";
import useCurrentUser from "../hooks/useCurrentUser";

const AdminRoute = () => {
	const { user } = useCurrentUser();

	return (
		<ProtectedRoute isAllowed={user?.userType === "admin"} redirectPath="/unauthorized" />
	);
};

export default AdminRoute;
