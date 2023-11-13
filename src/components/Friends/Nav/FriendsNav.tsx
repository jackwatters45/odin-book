import {
	mdiAccountArrowRight,
	mdiAccountDetails,
	mdiAccountMultiple,
	mdiAccountPlus,
	mdiGift,
} from "@mdi/js";
import FriendsNavOption from "./FriendsNavOption";
import {
	StyledFriendsNav,
	StyledFriendsNavOptions,
	StyledNavHeader,
	StyledNavHeaderH2,
} from "./FriendsNav.styles";

const FriendsNav = () => {
	return (
		<StyledFriendsNav>
			<StyledNavHeader>
				<StyledNavHeaderH2>Friends</StyledNavHeaderH2>
			</StyledNavHeader>
			<StyledFriendsNavOptions>
				<FriendsNavOption icon={mdiAccountMultiple} text="Home" to="/friends/" />
				<FriendsNavOption
					icon={mdiAccountArrowRight}
					text="Friend Requests"
					to="/friends/requests"
				/>
				<FriendsNavOption
					icon={mdiAccountPlus}
					text="Suggestions"
					to="/friends/suggestions"
				/>
				<FriendsNavOption icon={mdiAccountDetails} text="All Friends" to="/friends/all" />
				<FriendsNavOption icon={mdiGift} text="Birthdays" to="/friends/birthdays" />
			</StyledFriendsNavOptions>
		</StyledFriendsNav>
	);
};

export default FriendsNav;
