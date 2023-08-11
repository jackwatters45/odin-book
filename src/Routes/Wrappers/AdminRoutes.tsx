import ProtectedRoute from "./ProtectedRoute";
import useCurrentUser from "../../hooks/useCurrentUser";

const AdminRoutes = () => {
	const { user } = useCurrentUser();

	return (
		<ProtectedRoute isAllowed={user?.userType === "admin"} redirectPath="/unauthorized" />
	);
};

export default AdminRoutes;
