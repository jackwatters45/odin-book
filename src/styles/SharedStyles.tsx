import styled, { css } from "styled-components";

export const StandardButtonStyles = css`
	border-radius: 0.25rem;
	font-weight: 600;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 0;
	gap: 0.5rem;
`;

export const ButtonOverlay = css`
	&:hover::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.05);
	}
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

export const BottomDiv = styled.div<{ $border?: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 1rem;
	border-top: ${({ $border }) => ($border ? "1px solid #dddfe2" : "none")};
`;

export const PlaceholderDiv = styled.div`
	flex-grow: 1;
`;

export const StyledDialog = styled.dialog`
	background: white;
	color: black;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
	border: none;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	max-width: 700px;
	width: 90%;
	max-height: 90%;

	::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}
`;

export const StyledSearchInput = styled.label`
	width: 100%;
	height: 42px;
	border-radius: 1.5rem;
	background-color: #f0f2f5;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	position: relative;

	> input {
		font-size: 0.95rem;
		height: 100%;
		width: 100%;
		padding: 0 1rem;
		color: #65676b;
		outline: none;
		border-radius: 1.5rem;
		cursor: auto;
	}
`;
