import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 3rem;
	background-color: #f8f8f8; // Added a light background color
	min-height: 70vh; // Ensure the error message occupies a significant screen height
	text-align: center; // Center text contents
`;

const LinksContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`;

const StyledButton = styled.button`
	text-decoration: underline;
	cursor: pointer;
	background-color: transparent;
	border: none;
	color: #007bff; // A blue link color
`;

const StyledLink = styled(Link)`
	text-decoration: underline;
	color: #007bff; // A blue link color
`;

interface ErrorProps {
	code?: string;
	message?: string;
	showGoBack?: boolean;
}

const ErrorPage = ({ code = "Error", message, showGoBack = true }: ErrorProps) => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1); // maybe -2

	return (
		<Container>
			<h1>{code}</h1>
			{message && <h2>{message}</h2>}
			<h3>{"Oops! Something went wrong."}</h3>
			<LinksContainer>
				{showGoBack && <StyledButton onClick={goBack}>Go back</StyledButton>}
				<StyledLink to="/">Go home</StyledLink>
			</LinksContainer>
		</Container>
	);
};

export default ErrorPage;
