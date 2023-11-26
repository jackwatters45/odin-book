import { StyledFriendsHomeContainer, StyledHr } from "./FriendsHomeContent.styles";
import FriendsHomeRequests from "./Sections/Requests";
import FriendsHomeSuggestions from "./Sections/Suggestions";

const FriendsHomeContent = () => {
	return (
		<StyledFriendsHomeContainer>
			<FriendsHomeRequests />
			<StyledHr />
			<FriendsHomeSuggestions />
		</StyledFriendsHomeContainer>
	);
};

export default FriendsHomeContent;
