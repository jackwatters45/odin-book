import FriendsHomeContent from "./Content";
import HomeNav from "./Nav";
import { StyledFriendsContent } from "../../Components/Friends.styles";
import {
	StyledFriendsHomeContainer,
	StyledNavShadowXFriendsHome,
} from "./FriendHome.styles";
import { StyledNavShadowY } from "@/styles/SharedStyles";
import useWindowWidth from "@/hooks/dom/useWindowWidth";

const FriendHome = () => {
	const windowWidth = useWindowWidth();

	return (
		<StyledFriendsHomeContainer>
			<HomeNav />
			{windowWidth >= 800 ? <StyledNavShadowY left={360} /> : null}
			<StyledFriendsContent>
				{windowWidth < 800 ? <StyledNavShadowXFriendsHome /> : null}
				<FriendsHomeContent />
			</StyledFriendsContent>
		</StyledFriendsHomeContainer>
	);
};

export default FriendHome;
