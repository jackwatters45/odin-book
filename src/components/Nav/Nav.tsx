import { Navigate } from "react-router";
import { NavLink } from "@jackwatters/simple-nav";
import Icon from "@mdi/react";
import {
	mdiHomeOutline,
	mdiAccountMultipleOutline,
	mdiBellOutline,
	mdiPlusBoxOutline,
	mdiHome,
	mdiAccountMultiple,
	mdiBell,
} from "@mdi/js";

import useNav from "./useNav";
import { StyledNavShadow } from "@/styles/SharedStyles";
import SearchNav from "./Search";

import {
	StyledNavContainer,
	StyledNav,
	StyledSideNav,
	StyledCenterNav,
	ImageCircle,
	NavLinkCenterColumn,
	IconCircleBackground,
	StyledCreatePostButton,
} from "./Nav.styles";
import ProfileDropdown from "./ProfileDropdown";

const NavComponent = () => {
	const {
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
					<SearchNav />
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
						to="/friends/"
						text="Friends"
						showText={false}
						isActive={isFriendsActive}
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
						to="/notifications/"
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
					<ProfileDropdown />
				</StyledSideNav>
			</StyledNav>
			<StyledNavShadow />
		</StyledNavContainer>
	);
};

export default NavComponent;
