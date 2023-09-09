import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/theme/GlobalStyle";
import AppInitializer from "./AppInitializer";
import { useColorTheme } from "./styles/theme/useColorTheme";
import "./styles/reset.css";
import ErrorProvider from "./components/Errors/useError/ErrorProvider";

function App() {
	const queryClient = new QueryClient();

	const colorTheme = useColorTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={colorTheme}>
				<ErrorProvider>
					<AppInitializer />
					<GlobalStyle />
					<ReactQueryDevtools initialIsOpen={true} />
				</ErrorProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
