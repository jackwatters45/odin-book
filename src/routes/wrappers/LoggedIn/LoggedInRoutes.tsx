import Loading from "../../../components/Shared/Loading";
import useCurrentUser from "../../../hooks/useCurrentUser";
import ProtectedRoutes from "../Protected/ProtectedRoutes";

const LoggedInRoutes = () => {
	const { user, isLoading, isSuccess, isError } = useCurrentUser();

	if (isLoading) return <Loading />;

	console.log("loaded", isLoading, isSuccess, isError, !!user);

	if (isSuccess) return <ProtectedRoutes isAllowed={!!user} redirectPath="/login" />;
};

export default LoggedInRoutes;
