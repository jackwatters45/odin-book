import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const AdminRoutes = () => {
	const { user } = useCurrentUser();

	return (
		<ProtectedRoutes
			isAllowed={user?.userType === "admin"}
			redirectPath="/unauthorized"
		/>
	);
};

export default AdminRoutes;
