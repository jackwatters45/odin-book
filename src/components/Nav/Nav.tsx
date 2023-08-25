import { NavButton, NavLink } from "@jackwatters/simple-nav";
import Icon from "@mdi/react";
import {
	mdiMagnify,
	mdiHome,
	mdiAccountMultiple,
	mdiBell,
	mdiPlus,
	mdiLogoutVariant,
	mdiCog,
	mdiAccount,
} from "@mdi/js";

import Search from "./Search/Search";
import useNav from "./useNav";
import {
	ImageCircle,
	StyledNav,
	StyledSideNav,
	StyledCenterNav,
	NavLinkCenterColumn,
	IconCircleBackground,
	StyledDropdown,
} from "./Nav.styles";
import { Navigate } from "react-router";

// TODO responsive will need a lot of work (facebook's is just complicated)
const NavComponent = () => {
	const { handleClickLogout, user, isSuccess } = useNav();

	if (isSuccess && !user) return <Navigate to="/login" />;
	return (
		<StyledNav>
			<StyledSideNav>
				<NavLink
					to="/"
					text="Dashboard"
					showText={false}
					// TODO real image
					icon={<ImageCircle src="https://via.placeholder.com/40" alt="Odin Book" />}
					dataTestid="dashboard-button"
				/>
				<StyledDropdown
					buttonOptions={{
						includeArrow: false,
						includeText: false,
						text: "Search",
						icon: <Icon path={mdiMagnify} size={0.9} />,
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
					icon={<Icon path={mdiHome} size={1.2} />}
					dataTestid="home-button"
				/>
				<NavLinkCenterColumn
					to="/friends"
					text="Friends"
					showText={false}
					icon={<Icon path={mdiAccountMultiple} size={1.2} />}
					dataTestid="friends-button"
				/>
				<NavLinkCenterColumn
					to="/notifications"
					text="Notifications"
					showText={false}
					icon={<Icon path={mdiBell} size={1.2} />}
					dataTestid="notifications-button"
				/>
				<NavLinkCenterColumn
					to="/create"
					text="Create"
					showText={false}
					icon={<Icon path={mdiPlus} size={1.2} />}
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
							<IconCircleBackground path={mdiAccount} size={1.5} />
						),
					}}
					dataTestid="profile-dropdown"
				>
					{/* TODO fancy profile thing */}
					<NavLink
						to="/profile"
						text="Profile"
						icon={<IconCircleBackground path={mdiAccount} size={1.5} />}
						dataTestid="profile-button"
					/>
					<NavLink
						to="/settings"
						text="Settings"
						icon={<IconCircleBackground path={mdiCog} size={1.5} />}
						dataTestid="settings-button"
					/>
					<NavButton
						onClick={handleClickLogout}
						text="Log out"
						icon={<IconCircleBackground path={mdiLogoutVariant} size={1.5} />}
						dataTestid="logout-button"
					/>
				</StyledDropdown>
			</StyledSideNav>
		</StyledNav>
	);
};

export default NavComponent;
