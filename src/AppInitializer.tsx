import useCurrentUser from "./hooks/useCurrentUser";
import Loading from "./components/shared/Loading";
import RoutesComponent from "./Routes";

const AppInitializer = () => {
	const { isLoading } = useCurrentUser();

	if (isLoading) return <Loading />;

	return <RoutesComponent />;
};

export default AppInitializer;
