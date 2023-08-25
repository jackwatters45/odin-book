import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import AppInitializer from "./AppInitializer";
import { useColorTheme } from "./styles/useColorTheme";
import "./styles/reset.css";

function App() {
	const queryClient = new QueryClient();

	const colorTheme = useColorTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={colorTheme}>
				<AppInitializer />
				<GlobalStyle />
				<ReactQueryDevtools initialIsOpen={true} />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
