import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import CreateAccount from "./components/auth/CreateAccount";
import UnauthorizedPage from "./components/shared/util/UnauthorizedPage";
import Loading from "./components/shared/util/Loading";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard";
import { apiBaseUrl } from "./config/envVariables";

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
				<Route path="/login" element={<Login />} />
				<Route path="/create-account" element={<CreateAccount />} />
				<Route path="/unauthorized" element={<UnauthorizedPage />} />

				<Route index element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
