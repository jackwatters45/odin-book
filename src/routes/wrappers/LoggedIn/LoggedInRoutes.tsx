import Loading from "../../../components/Shared/Loading";
import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const LoggedInRoutes = () => {
	const { user, isLoading, isSuccess } = useCurrentUser();

	if (isLoading) return <Loading />;

	if (isSuccess) return <ProtectedRoutes isAllowed={!!user} redirectPath="/login" />;
};

export default LoggedInRoutes;
