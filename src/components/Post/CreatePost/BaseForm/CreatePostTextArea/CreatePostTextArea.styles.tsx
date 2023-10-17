import styled from "styled-components";

export const StyledPostTextContainer = styled.div`
	min-height: 5rem;
`;

export const StyledPostTextArea = styled.textarea`
	color: ${({ theme }) => theme.colors.textSecondary};
	width: 100%;
	resize: none;
	outline: none;
	padding-bottom: 2.5rem;
	min-height: 8rem;
	font-size: 1.5rem;
	font-weight: 400;
	max-height: 720px;
`;
