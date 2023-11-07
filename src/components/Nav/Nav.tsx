import { Navigate } from "react-router";
import { NavLink } from "@jackwatters/simple-nav";
import Icon from "@mdi/react";
import {
	mdiMagnify,
	mdiHomeOutline,
	mdiAccountMultipleOutline,
	mdiBellOutline,
	mdiPlusBoxOutline,
	mdiLogoutVariant,
	mdiAccount,
	mdiHome,
	mdiAccountMultiple,
	mdiBell,
} from "@mdi/js";

import Search from "./Search/Search";
import useNav from "./useNav";
import {
	StyledNavContainer,
	StyledNav,
	StyledSideNav,
	StyledCenterNav,
	ImageCircle,
	NavLinkCenterColumn,
	IconCircleBackground,
	StyledDropdown,
	StyledDropdownLink,
	StyledDropdownButton,
	StyledCreatePostButton,
} from "./Nav.styles";
import { StyledNavShadow } from "@/styles/SharedStyles";
import defaultUserAvatar from "../User/UserFields/Avatar/utils/defaultUserAvatar";

const NavComponent = () => {
	const {
		handleClickLogout,
		user,
		isSuccess,
		openCreatePostDialog,
		isDashboardActive,
		isFriendsActive,
		isNotificationsActive,
	} = useNav();

	if (isSuccess && !user) return <Navigate to="/login" />;
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledSideNav>
					<NavLink
						to="/"
						text="Dashboard"
						showText={false}
						icon={
							<ImageCircle
								src="https://res.cloudinary.com/drheg5d7j/image/upload/v1699317092/OdinBookLogo_jus0m9.png"
								alt="Odinbook"
							/>
						}
						dataTestid="dashboard-button"
					/>
					<StyledDropdown
						buttonOptions={{
							includeArrow: false,
							includeText: false,
							text: "Search",
							icon: <Icon path={mdiMagnify} size={0.9} color={"#65676B"} />,
						}}
						dataTestid="search-dropdown"
					>
						<Search />
					</StyledDropdown>
				</StyledSideNav>
				<StyledCenterNav>
					<NavLinkCenterColumn
						to="/"
						text="Home"
						showText={false}
						icon={
							<Icon
								path={isDashboardActive ? mdiHome : mdiHomeOutline}
								size={1.2}
								color={isDashboardActive ? "#1b74e4" : "#65676B"}
							/>
						}
						dataTestid="home-button"
					/>
					<NavLinkCenterColumn
						to="/friends"
						text="Friends"
						showText={false}
						icon={
							<Icon
								path={isFriendsActive ? mdiAccountMultiple : mdiAccountMultipleOutline}
								size={1.2}
								color={isFriendsActive ? "#1b74e4" : "#65676B"}
							/>
						}
						dataTestid="friends-button"
					/>
					<NavLinkCenterColumn
						to="/notifications"
						text="Notifications"
						showText={false}
						icon={
							<Icon
								path={isNotificationsActive ? mdiBell : mdiBellOutline}
								size={1.2}
								color={isNotificationsActive ? "#1b74e4" : "#65676B"}
							/>
						}
						dataTestid="notifications-button"
					/>
				</StyledCenterNav>
				<StyledSideNav>
					<StyledCreatePostButton onClick={openCreatePostDialog}>
						<IconCircleBackground
							path={mdiPlusBoxOutline}
							size={5 / 3}
							color={"#65676B"}
							background="transparent"
						/>
					</StyledCreatePostButton>
					<StyledDropdown
						buttonOptions={{
							includeArrow: false,
							icon: (
								<ImageCircle
									src={user?.avatarUrl || defaultUserAvatar}
									alt="User profile icon"
								/>
							),
						}}
						dataTestid="profile-dropdown"
					>
						<StyledDropdownLink
							to={`/user/${user?._id}/`}
							text="Profile"
							icon={
								<IconCircleBackground path={mdiAccount} size={1.5} color={"#1c1e21"} />
							}
							dataTestid="profile-button"
						/>
						<StyledDropdownButton
							onClick={handleClickLogout}
							text="Log out"
							icon={
								<IconCircleBackground
									path={mdiLogoutVariant}
									size={1.5}
									color={"#1c1e21"}
								/>
							}
							dataTestid="logout-button"
						/>
					</StyledDropdown>
				</StyledSideNav>
			</StyledNav>
			<StyledNavShadow />
		</StyledNavContainer>
	);
};

export default NavComponent;
