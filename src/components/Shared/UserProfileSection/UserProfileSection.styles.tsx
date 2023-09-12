import styled from "styled-components";

export const UserProfileSectionContainer = styled.div`
	width: 490px;
	background-color: #ffffff;
	border-radius: 0.25rem;
	${(props) => props.theme.sectionShadow}
	display: flex;
	position: relative;
	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
`;

export const StyledProfileSectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 1.5rem;
`;

export const StyledButton = styled.button`
	padding: 0.75rem 0.5rem 0.5rem;
	border-radius: 0.25rem;
	margin-right: -0.5rem;

	a {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.blueText};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
