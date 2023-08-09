import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RoutesComponent from "./Routes";

function App() {
	// Access the client
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RoutesComponent />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
}

export default App;
