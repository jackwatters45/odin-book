import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import "./styles/reset.css";
import GlobalStyle from "./styles/theme/GlobalStyle";
import RoutesComponent from "./routes/Routes";
import { useColorTheme } from "./styles/theme/useColorTheme";
import ErrorProvider from "./components/Errors/useError/ErrorProvider";
import PostFormProvider from "./components/Post/PostForm/context/PostFormProvider";
import ViewPostProvider from "./components/Post/ViewPost/context/ViewPostProvider";
import ContainerWidthProvider from "./components/User/UserProfile/context/ContainerWidthProvider";

const queryClient = new QueryClient();

function App() {
	const colorTheme = useColorTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={colorTheme}>
				<ErrorProvider>
					<PostFormProvider>
						<ViewPostProvider>
							<ContainerWidthProvider>
								<RoutesComponent />
								<GlobalStyle />
							</ContainerWidthProvider>
						</ViewPostProvider>
					</PostFormProvider>
				</ErrorProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
