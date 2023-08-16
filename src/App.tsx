import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppInitializer from "./AppInitializer";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<AppInitializer />
			{/* TODO uncomment when dealing more with fetches */}
			{/* <ReactQueryDevtools initialIsOpen={true} /> */}
		</QueryClientProvider>
	);
}

export default App;
