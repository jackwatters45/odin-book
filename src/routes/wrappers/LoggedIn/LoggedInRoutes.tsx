import Loading from "../../../components/Shared/Loading";
import useCurrentUser from "../../../hooks/auth/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const LoggedInRoutes = () => {
	const { currentUser, isLoading, isSuccess } = useCurrentUser();

	if (isLoading) return <Loading />;

	if (isSuccess)
		return <ProtectedRoutes isAllowed={!!currentUser} redirectPath="/login" />;
};

export default LoggedInRoutes;
