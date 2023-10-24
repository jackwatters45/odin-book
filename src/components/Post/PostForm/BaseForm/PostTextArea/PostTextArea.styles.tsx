import styled from "styled-components";

export const StyledPostTextContainer = styled.div``;

export const StyledPostTextArea = styled.textarea`
	color: ${({ theme }) => theme.colors.textSecondary};
	width: 100%;
	resize: none;
	outline: none;

	height: 100%;

	font-size: 1.5rem;
	font-weight: 400;
	max-height: 720px;
`;
