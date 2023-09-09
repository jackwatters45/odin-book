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
import FindYourAccount from "../components/Auth/ForgotPassword/FindYourAccount";
import ChooseNewPassword from "../components/Auth/ForgotPassword/ChooseNewPassword";
import ValidateResetLink from "../components/Auth/ForgotPassword/ValidateResetLink/ValidateResetLink";

import UserProfile from "../components/User/UserProfile";
import UserPosts from "../components/User/UserProfile/Pages/UserPosts";

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

				<Route element={<LoggedInRoute />}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="/user/:id" element={<UserProfile />}>
							<Route index element={<UserPosts />} />
							<Route path="about" element={<>About</>} />
							<Route path="friends" element={<>Friends</>} />
							<Route path="photos" element={<h1>Photos</h1>} />
							<Route path="videos" element={<>Videos</>} />
							<Route path="check-ins" element={<>Check-ins</>} />
							<Route path="more" element={<>more</>} />
						</Route>

						<Route element={<AdminRoute />}></Route>
					</Route>
				</Route>

				<Route path="/unauthorized" element={<Unauthorized />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
