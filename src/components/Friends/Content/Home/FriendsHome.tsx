import { StyledHr } from "./FriendsHome.styles";
import FriendsHomeRequests from "./Sections/FriendsHomeRequests";
import FriendsHomeSuggestions from "./Sections/Suggestions/FriendsHomeSuggestions";

const FriendsHome = () => {
	return (
		<>
			<FriendsHomeRequests />
			<StyledHr />
			<FriendsHomeSuggestions />
		</>
	);
};

export default FriendsHome;
