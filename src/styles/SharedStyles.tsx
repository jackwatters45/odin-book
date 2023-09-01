import styled, { css } from "styled-components";

export const StandardButtonStyles = css`
	border-radius: 0.25rem;
	font-weight: 600;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	line-height: 0;
	gap: 0.5rem;
`;

export const StandardButtonColor = css`
	color: black;
	background-color: #e4e6eb;
`;

export const StyledButtonDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;

	button {
		font-weight: 600;
		height: 2.25rem;
		border-radius: 0.375rem;
		padding: 0 0.75rem;
		font-size: 0.9rem;
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

export const CenteredDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledHobbiesContainerCss = css`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const StyledUppercaseText = styled.p`
	font-size: 0.85rem;
	font-weight: 600;
	color: #65676b;
	width: 100%;
	margin-bottom: 0.5rem;
`;
