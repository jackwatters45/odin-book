import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/auth/Login/LoginForm";
import CreateAccountForm from "./components/auth/CreateAccount/CreateAccountForm";
import UnauthorizedPage from "./components/errors/UnauthorizedPage";
import Loading from "./components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard";
import { apiBaseUrl } from "./config/envVariables";
import NotFoundPage from "./components/errors/NotFoundPage";

const RoutesComponent = () => {
	// TODO good enough for now
	const { status, error } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			return await fetch(`${apiBaseUrl}/auth/current-user`, {
				method: "GET",
				credentials: "include",
			});
		},
	});

	if (status === "loading") return <Loading />;
	if (status === "error") return <div>{error as string}</div>;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/create-account" element={<CreateAccountForm />} />
				<Route path="/unauthorized" element={<UnauthorizedPage />} />

				<Route path="/" element={<Dashboard />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
