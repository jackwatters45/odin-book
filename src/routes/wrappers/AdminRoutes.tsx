import useCurrentUser from "../../hooks/useCurrentUser";
import ProtectedRoute from "./ProtectedRoute";

const AdminRoutes = () => {
	const { user } = useCurrentUser();

	return (
		<ProtectedRoute isAllowed={user?.userType === "admin"} redirectPath="/unauthorized" />
	);
};

export default AdminRoutes;
