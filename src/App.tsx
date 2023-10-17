import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/theme/GlobalStyle";
import AppInitializer from "./AppInitializer";
import { useColorTheme } from "./styles/theme/useColorTheme";
import "./styles/reset.css";
import ErrorProvider from "./components/Errors/useError/ErrorProvider";
import CreatePostProvider from "./components/Post/CreatePost/context/CreatePostProvider";

const queryClient = new QueryClient();

function App() {
	const colorTheme = useColorTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={colorTheme}>
				<ErrorProvider>
					<CreatePostProvider>
						<AppInitializer />
						<GlobalStyle />
						<ReactQueryDevtools initialIsOpen={true} />
					</CreatePostProvider>
				</ErrorProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
