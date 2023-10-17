import styled from "styled-components";

export const StyledAddToPost = styled.div`
	display: flex;
	justify-content: space-between;
	height: 58px;
	align-items: center;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	border: solid 1px ${({ theme }) => theme.colors.border};
	${({ theme }) => theme.sectionShadow};
`;

export const StyledAddToPostText = styled.span`
	font-size: 0.95rem;
	font-weight: 600;
`;

export const StyledAddToPostIcons = styled.div`
	display: flex;
	gap: 0.375rem;
	cursor: pointer;
`;
