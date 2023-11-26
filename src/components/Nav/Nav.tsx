import { Navigate } from "react-router";
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
import { StyledNavShadowX } from "@/styles/SharedStyles";
import SearchNav from "./Search";

import {
	StyledNavContainer,
	StyledSideNav,
	StyledCenterNav,
	ImageCircle,
	NavLinkCenterColumn,
	IconCircleBackground,
	StyledCreatePostButton,
	StyledFixedNavPadding,
	StyledNav,
} from "./Nav.styles";
import ProfileDropdown from "./ProfileDropdown";
import NavLink from "./NavLink";

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
		<>
			<StyledNavContainer>
				<StyledNav>
					<StyledSideNav>
						<NavLink
							to="/"
							icon={
								<ImageCircle
									src="https://res.cloudinary.com/drheg5d7j/image/upload/v1699317092/OdinBookLogo_jus0m9.png"
									alt="Odinbook"
								/>
							}
						/>
						<SearchNav />
					</StyledSideNav>
					<StyledCenterNav>
						<NavLinkCenterColumn
							to="/"
							isActive={isDashboardActive}
							icon={
								<Icon
									path={isDashboardActive ? mdiHome : mdiHomeOutline}
									size={1.2}
									color={isDashboardActive ? "#1b74e4" : "#65676B"}
								/>
							}
						/>
						<NavLinkCenterColumn
							to="/friends/"
							isActive={isFriendsActive}
							icon={
								<Icon
									path={isFriendsActive ? mdiAccountMultiple : mdiAccountMultipleOutline}
									size={1.2}
									color={isFriendsActive ? "#1b74e4" : "#65676B"}
								/>
							}
						/>
						<NavLinkCenterColumn
							to="/notifications/"
							isActive={isNotificationsActive}
							icon={
								<Icon
									path={isNotificationsActive ? mdiBell : mdiBellOutline}
									size={1.2}
									color={isNotificationsActive ? "#1b74e4" : "#65676B"}
								/>
							}
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
				<StyledNavShadowX />
			</StyledNavContainer>
			<StyledFixedNavPadding />
		</>
	);
};

export default NavComponent;
