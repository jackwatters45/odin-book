import {
	StyledFormHeaderDiv,
	StyledFormHeaderSubtitle,
	StyledFormHeaderTitle,
} from "./CreateAccountHeader.styles";

const CreateAccountHeader = () => {
	return (
		<StyledFormHeaderDiv>
			<StyledFormHeaderTitle>Sign Up</StyledFormHeaderTitle>
			<StyledFormHeaderSubtitle>It’s quick and easy.</StyledFormHeaderSubtitle>
		</StyledFormHeaderDiv>
	);
};

export default CreateAccountHeader;
