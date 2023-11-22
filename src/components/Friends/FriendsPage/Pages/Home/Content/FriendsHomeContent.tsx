import styled from "styled-components";
import { StyledHr } from "./FriendsHomeContent.styles";
import FriendsHomeRequests from "./Sections/Requests";
import FriendsHomeSuggestions from "./Sections/Suggestions";

const StyledFriendsHomeContainer = styled.div`
	padding: 1.25rem;
`;
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
