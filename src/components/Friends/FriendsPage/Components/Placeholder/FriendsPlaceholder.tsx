import {
	StyledPlaceholderContainer,
	StyledPlaceholderImage,
	StyledPlaceholderText,
} from "./FriendsPlaceholder.styles";

const FriendsPlaceholder = () => {
	return (
		<StyledPlaceholderContainer>
			<StyledPlaceholderImage
				src="https://res.cloudinary.com/drheg5d7j/image/upload/v1700264727/null_states_people_gray_wash_oikyzi.svg"
				alt="people"
			/>
			<StyledPlaceholderText>
				{"Select people's names to preview their profile."}
			</StyledPlaceholderText>
		</StyledPlaceholderContainer>
	);
};

export default FriendsPlaceholder;
