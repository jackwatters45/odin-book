import { Outlet } from "react-router";

import FriendsNav from "./Nav";
import { StyledFriendsContainer, StyledFriendsContent } from "./Friends.styles";

const Friends = () => {
	return (
		<StyledFriendsContainer>
			<FriendsNav />
			<StyledFriendsContent>
				<Outlet />
			</StyledFriendsContent>
		</StyledFriendsContainer>
	);
};

export default Friends;
