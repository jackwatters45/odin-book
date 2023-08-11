import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "../components/Auth/Login/LoginForm";
import CreateAccountForm from "../components/Auth/CreateAccount/CreateAccountForm";
import UnauthorizedPage from "../components/Errors/UnauthorizedPage";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../components/Errors/NotFoundPage";
import AdminRoute from "./wrappers/AdminRoutes";
import ForgotPassword from "../components/Auth/ForgotPassword/ForgotPassword";
import AuthRoute from "./wrappers/AuthRoutes";
import Layout from "./wrappers/Layout";
import LoggedInRoute from "./wrappers/LoggedInRoute";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<LoginForm />}>
						<Route path="forgot-password" element={<ForgotPassword />} />
					</Route>
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
