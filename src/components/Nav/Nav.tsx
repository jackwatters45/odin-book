import Icon from "@mdi/react";
import {
	mdiHomeOutline,
	mdiAccountMultipleOutline,
	mdiPlusBoxOutline,
	mdiHome,
	mdiAccountMultiple,
} from "@mdi/js";

import useNav from "./useNav";
import { StyledNavShadowX } from "@/styles/SharedStyles";
import SearchNav from "./Search";
import ProfileDropdown from "./ProfileDropdown";
import NavLink from "./NavLink";
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
import NotificationsNavIcon from "./NotificationsIcon/NotificationsNavIcon";

const NavComponent = () => {
	const {
		openCreatePostDialog,
		isDashboardActive,
		isFriendsActive,
		isNotificationsActive,
	} = useNav();

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
								<NotificationsNavIcon isNotificationsActive={isNotificationsActive} />
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
