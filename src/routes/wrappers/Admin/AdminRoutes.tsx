import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const AdminRoutes = () => {
	const { currentUser } = useCurrentUser();

	return (
		<ProtectedRoutes
			isAllowed={currentUser?.userType === "admin"}
			redirectPath="/unauthorized"
		/>
	);
};

export default AdminRoutes;
