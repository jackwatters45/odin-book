import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login/Login";
import CreateAccount from "../components/Auth/CreateAccount";

import Unauthorized from "../components/Errors/Unauthorized/Unauthorized";
import NotFound from "../components/Errors/NotFound/NotFound";

import AdminRoute from "./wrappers/Admin/AdminRoutes";
import AuthRoute from "./wrappers/Auth/AuthRoutes";
import LoggedInRoute from "./wrappers/LoggedIn/LoggedInRoutes";
import Layout from "./wrappers/Layout/Layout";

import Dashboard from "../components/Dashboard";

import ResetPasswordMethod from "../components/Auth/ForgotPassword/ResetPasswordMethod";
import EnterSecurityCode from "../components/Auth/ForgotPassword/EnterSecurityCode";
import FindYourAccount from "../components/Auth/ForgotPassword/FindYourAccount/FindYourAccount";
import ChooseNewPassword from "../components/Auth/ForgotPassword/ChooseNewPassword";
import ValidateResetLink from "../components/Auth/ForgotPassword/ValidateResetLink/ValidateResetLink";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<Login />} />
					<Route path="/create-account" element={<CreateAccount />} />
					<Route path="/recover">
						<Route index element={<FindYourAccount />} />
						<Route path="method" element={<ResetPasswordMethod />} />
						<Route path="code" element={<EnterSecurityCode />} />
						<Route path="password" element={<ChooseNewPassword />} />
						<Route path="validate-link/:token" element={<ValidateResetLink />} />
					</Route>
				</Route>

				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />

					<Route element={<LoggedInRoute />}></Route>

					<Route element={<AdminRoute />}></Route>
				</Route>

				<Route path="/unauthorized" element={<Unauthorized />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
