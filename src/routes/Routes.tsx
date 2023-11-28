import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import Login from "../components/Auth/Login/Login";
import CreateAccount from "../components/Auth/CreateAccount";

import Unauthorized from "../components/Errors/Unauthorized/Unauthorized";
import NotFound from "../components/Errors/NotFound/NotFound";

import AdminRoute from "./wrappers/Admin/AdminRoutes";
import AuthRoute from "./wrappers/Auth/AuthRoutes";
import LoggedInRoute from "./wrappers/LoggedIn/LoggedInRoutes";
import Layout from "./wrappers/Layout/Layout";

import Dashboard from "../components/Dashboard/Dashboard";

import ResetPasswordMethod from "../components/Auth/ForgotPassword/ResetPasswordMethod";
import EnterSecurityCode from "../components/Auth/ForgotPassword/EnterSecurityCode";
import FindYourAccount from "../components/Auth/ForgotPassword/FindYourAccount";
import ChooseNewPassword from "../components/Auth/ForgotPassword/ChooseNewPassword";
import ValidateResetLink from "../components/Auth/ForgotPassword/ValidateResetLink/ValidateResetLink";

import UserProfile from "../components/User/UserProfile";
import UserPosts from "../components/User/UserProfile/Pages/UserPosts";
import UserPhotos from "@/components/User/UserProfile/Pages/UserPhotos";
import UserAbout from "@/components/User/UserProfile/Pages/UserAbout";
import UserAboutOverview from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutOverview";
import UserAboutWorkEducation from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutWorkEducation/UserAboutWorkEducation";
import UserAboutPlacesLived from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutPlacesLived/UserAboutPlacesLived";
import UserAboutBasicInfo from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutBasicInfo";
import UserAboutRelationshipFamily from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutRelationshipFamily";
import UserAboutDetails from "@/components/User/UserProfile/Pages/UserAbout/Pages/UserAboutDetails";
import UserFriends from "@/components/User/UserProfile/Pages/UserFriends";
import FriendsHome from "@/components/Friends/FriendsPage/Pages/Home";
import FriendsFriendRequests from "@/components/Friends/FriendsPage/Pages/Requests";
import FriendsSuggestions from "@/components/Friends/FriendsPage/Pages/Suggestions";
import FriendsAll from "@/components/Friends/FriendsPage/Pages/All";
import PostPhotosView from "@/components/Post/PhotoDisplay";
import Notifications from "@/components/Notifications";

const UserRoutes = [
	<Fragment key="1">
		<Route index element={<UserPosts />} />
		<Route path="about/" element={<UserAbout />}>
			<Route index element={<UserAboutOverview />} />
			<Route path="work_and_education" element={<UserAboutWorkEducation />} />
			<Route path="places" element={<UserAboutPlacesLived />} />
			<Route path="contact_and_basic_info" element={<UserAboutBasicInfo />} />
			<Route path="family_and_relationships" element={<UserAboutRelationshipFamily />} />
			<Route path="details" element={<UserAboutDetails />} />
		</Route>
		<Route path="photos" element={<UserPhotos />}>
			<Route path="of" element={<UserPhotos />} />
			<Route path="by" element={<UserPhotos />} />
		</Route>
		<Route path="friends" element={<UserFriends />}>
			<Route path="all" element={<UserFriends />} />
			<Route path="mutual" element={<UserFriends />} />
			<Route path="college" element={<UserFriends />} />
			<Route path="current-city" element={<UserFriends />} />
			<Route path="hometown" element={<UserFriends />} />
		</Route>
	</Fragment>,
];

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
						<Route path="friends">
							<Route index element={<FriendsHome />} />
							<Route path="requests">
								<Route index element={<FriendsFriendRequests />} />
								<Route path=":id" element={<FriendsFriendRequests />}>
									{UserRoutes}
								</Route>
							</Route>
							<Route path="suggestions">
								<Route index element={<FriendsSuggestions />} />
								<Route path=":id" element={<FriendsSuggestions />}>
									{UserRoutes}
								</Route>
							</Route>
							<Route path="all">
								<Route index element={<FriendsAll />} />
								<Route path=":id" element={<FriendsAll />}>
									{UserRoutes}
								</Route>
							</Route>
						</Route>
						<Route path="notifications" element={<Notifications />} />
						<Route path="user/:id" element={<UserProfile />}>
							{UserRoutes}
						</Route>
					</Route>
					<Route path="post/:id/photos" element={<PostPhotosView />} />
					<Route element={<AdminRoute />} />
				</Route>
				<Route path="/unauthorized" element={<Unauthorized />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComponent;
