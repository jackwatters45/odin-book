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
import { Navigate } from "react-router";
import { StyledNavShadow } from "@/styles/SharedStyles";
import defaultUserAvatar from "../User/UserFields/Avatar/utils/defaultUserAvatar";

// TODO responsive will need a lot of work (facebook's is just complicated)
// TODO search
// TODO notifications

const NavComponent = () => {
	const { handleClickLogout, user, isSuccess, openDialog } = useNav();

	if (isSuccess && !user) return <Navigate to="/login" />;
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledSideNav>
					<NavLink
						to="/"
						text="Dashboard"
						showText={false}
						// TODO real image
						icon={<ImageCircle src="https://via.placeholder.com/40" alt="Odinbook" />}
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
				{/* TODO no hover active */}
				<StyledCenterNav>
					<NavLinkCenterColumn
						to="/"
						text="Home"
						showText={false}
						icon={<Icon path={mdiHomeOutline} size={1.2} color={"#65676B"} />}
						dataTestid="home-button"
					/>
					<NavLinkCenterColumn
						to="/friends"
						text="Friends"
						showText={false}
						icon={<Icon path={mdiAccountMultipleOutline} size={1.2} color={"#65676B"} />}
						dataTestid="friends-button"
					/>
					<NavLinkCenterColumn
						to="/notifications"
						text="Notifications"
						showText={false}
						icon={<Icon path={mdiBellOutline} size={1.2} color={"#65676B"} />}
						dataTestid="notifications-button"
					/>
				</StyledCenterNav>
				<StyledSideNav>
					<StyledCreatePostButton onClick={openDialog}>
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
