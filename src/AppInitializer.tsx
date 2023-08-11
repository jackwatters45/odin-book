import useCurrentUser from "./hooks/useCurrentUser";
import Loading from "./components/Shared/Loading";
import RoutesComponent from "./routes/Routes";

const AppInitializer = () => {
	const { isLoading } = useCurrentUser();

	if (isLoading) return <Loading />;

	return <RoutesComponent />;
};

export default AppInitializer;
