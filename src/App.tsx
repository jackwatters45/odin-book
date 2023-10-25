import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/theme/GlobalStyle";
import AppInitializer from "./AppInitializer";
import { useColorTheme } from "./styles/theme/useColorTheme";
import "./styles/reset.css";
import ErrorProvider from "./components/Errors/useError/ErrorProvider";
import PostFormProvider from "./components/Post/PostForm/context/PostFormProvider";
import ViewPostProvider from "./components/Post/ViewPost/context/ViewPostProvider";

const queryClient = new QueryClient();

function App() {
	const colorTheme = useColorTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={colorTheme}>
				<ErrorProvider>
					<PostFormProvider>
						<ViewPostProvider>
							<AppInitializer />
							<GlobalStyle />
							<ReactQueryDevtools initialIsOpen={true} />
						</ViewPostProvider>
					</PostFormProvider>
				</ErrorProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
