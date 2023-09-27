import { NavLink } from "@jackwatters/simple-nav";
import Icon from "@mdi/react";
import {
	mdiMagnify,
	mdiHomeOutline,
	mdiAccountMultipleOutline,
	mdiBellOutline,
	mdiPlusBoxOutline,
	mdiLogoutVariant,
	mdiCog,
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
} from "./Nav.styles";
import { Navigate } from "react-router";
import { StyledNavShadow } from "@/styles/SharedStyles";

// TODO responsive will need a lot of work (facebook's is just complicated)
// TODO search
// TODO notifications
// TODO icon color: active plus dark mode
const NavComponent = () => {
	const { handleClickLogout, user, isSuccess } = useNav();

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
					<NavLinkCenterColumn
						to="/create"
						text="Create"
						showText={false}
						icon={<Icon path={mdiPlusBoxOutline} size={1.2} color={"#65676B"} />}
						dataTestid="create-button"
					/>
				</StyledCenterNav>
				<StyledSideNav>
					<StyledDropdown
						buttonOptions={{
							includeArrow: false,
							icon: user?.avatarUrl ? (
								<ImageCircle src={user.avatarUrl} alt="User profile icon" />
							) : (
								<IconCircleBackground path={mdiAccount} size={1.5} color={"#1c1e21"} />
							),
						}}
						dataTestid="profile-dropdown"
					>
						{/* TODO fancy profile thing */}
						<StyledDropdownLink
							to={`/user/${user?._id}/`}
							text="Profile"
							icon={
								<IconCircleBackground path={mdiAccount} size={1.5} color={"#1c1e21"} />
							}
							dataTestid="profile-button"
						/>
						<StyledDropdownLink
							to="/settings"
							text="Settings"
							icon={<IconCircleBackground path={mdiCog} size={1.5} color={"#1c1e21"} />}
							dataTestid="settings-button"
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
