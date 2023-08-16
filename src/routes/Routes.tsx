import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login";
import CreateAccount from "../components/Auth/CreateAccount";
import LoginCachedUser from "../components/Auth/LoginCachedUser";

import Unauthorized from "../components/Errors/Unauthorized/Unauthorized";
import NotFound from "../components/Errors/NotFound/NotFound";

import AdminRoute from "./wrappers/Admin/AdminRoutes";
import AuthRoute from "./wrappers/Auth/AuthRoutes";
import LoggedInRoute from "./wrappers/LoggedIn/LoggedInRoutes";
import Layout from "./wrappers/Layout/Layout";

import Dashboard from "../components/Dashboard";
import SendCodeConfirmation from "../components/Auth/ResetPassword/SendCodeConfirmation";
import ResetPasswordMethod from "../components/Auth/ResetPassword/ResetPasswordMethod";
import EnterSecurityCode from "../components/Auth/ResetPassword/EnterSecurityCode";
import ForgotPasswordForm from "../components/Auth/ResetPassword/ForgotPasswordForm/ForgotPasswordForm";
import ChooseNewPassword from "../components/Auth/ResetPassword/ChooseNewPassword";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route path="/login">
						<Route index element={<Login />} />
						<Route path=":userId" element={<LoginCachedUser />} />
						<Route path="identity" element={<ForgotPasswordForm />} />
					</Route>
					<Route path="/recover">
						<Route index element={<ForgotPasswordForm />} />
						<Route path="initiate" element={<SendCodeConfirmation />} />
						<Route path="method" element={<ResetPasswordMethod />} />
						<Route path="code" element={<EnterSecurityCode />} />
						<Route path="password" element={<ChooseNewPassword />} />
					</Route>
					<Route path="/create-account" element={<CreateAccount />} />
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
