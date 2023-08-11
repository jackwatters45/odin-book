import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/auth/Login/LoginForm";
import CreateAccountForm from "./components/auth/CreateAccount/CreateAccountForm";
import UnauthorizedPage from "./components/errors/UnauthorizedPage";
import Dashboard from "./components/Dashboard";
import NotFoundPage from "./components/errors/NotFoundPage";
import AuthRoute from "./RouteWrappers/AuthRoutes";
import Layout from "./RouteWrappers/Layout";
import AdminRoute from "./RouteWrappers/AdminRoute";
import LoggedInRoute from "./RouteWrappers/LoggedInRoute";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<LoginForm />} />
					<Route path="/create-account" element={<CreateAccountForm />} />
				</Route>

				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />

					<Route element={<LoggedInRoute />}></Route>

					<Route element={<AdminRoute />}></Route>
				</Route>

				<Route path="/unauthorized" element={<UnauthorizedPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
