import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { MemoryRouter, Routes } from "react-router-dom";

interface TestEnvironmentWrapperProps {
	initialRoute?: string[];
	children: ReactNode;
}

const TestEnvironmentWrapper = ({
	initialRoute = ["/"],
	children,
}: TestEnvironmentWrapperProps) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<MemoryRouter initialEntries={initialRoute}>
				<Routes>{children}</Routes>
			</MemoryRouter>
		</QueryClientProvider>
	);
};

export default TestEnvironmentWrapper;
