import styled from "styled-components";

export const UserProfileSectionContainer = styled.div`
	// width: 100%;
	background-color: #ffffff;
	border-radius: 0.25rem;
	${(props) => props.theme.sectionShadow}
	display: flex;

	flex-direction: column;
	padding: 1rem;
	gap: 1rem;
`;

export const StyledProfileSectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 1.5rem;
`;
