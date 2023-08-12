import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../components/Auth/Login";
import ForgotPassword from "../components/Auth/ForgotPassword";
import CreateAccount from "../components/Auth/CreateAccount";

import Unauthorized from "../components/Errors/Unauthorized/Unauthorized";
import NotFound from "../components/Errors/NotFound/NotFound";

import AdminRoute from "./wrappers/Admin/AdminRoutes";
import AuthRoute from "./wrappers/Auth/AuthRoutes";
import LoggedInRoute from "./wrappers/LoggedIn/LoggedInRoutes";
import Layout from "./wrappers/Layout/Layout";

import Dashboard from "../components/Dashboard";

const RoutesComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route path="/login" element={<Login />}>
						<Route path="forgot-password" element={<ForgotPassword />} />
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
