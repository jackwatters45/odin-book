import {
	mdiAccountArrowRight,
	mdiAccountDetails,
	mdiAccountMultiple,
	mdiAccountPlus,
} from "@mdi/js";

import {
	StyledFriendsNav,
	StyledFriendsNavOptions,
	StyledNavHeader,
	StyledNavHeaderH2,
} from "./FriendsHomeNav.styles";
import FriendsNavOption from "../../../Components/FriendsNavOption";
import { HtmlHTMLAttributes } from "react";

const FriendsHomeNav = (props: HtmlHTMLAttributes<HTMLDivElement>) => (
	<StyledFriendsNav {...props}>
		<StyledNavHeader>
			<StyledNavHeaderH2>Friends</StyledNavHeaderH2>
		</StyledNavHeader>
		<StyledFriendsNavOptions>
			<FriendsNavOption icon={mdiAccountMultiple} text="Home" to="/friends/" />
			<FriendsNavOption
				icon={mdiAccountArrowRight}
				text="Friend Requests"
				to="/friends/requests"
				includeArrow={true}
			/>
			<FriendsNavOption
				icon={mdiAccountPlus}
				text="Suggestions"
				to="/friends/suggestions"
				includeArrow={true}
			/>
			<FriendsNavOption
				icon={mdiAccountDetails}
				text="All Friends"
				to="/friends/all"
				includeArrow={true}
			/>
		</StyledFriendsNavOptions>
	</StyledFriendsNav>
);

export default FriendsHomeNav;
