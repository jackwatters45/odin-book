import styled from "styled-components";

export const StyledCheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	position: relative;
	width: fit-content;
	cursor: pointer;

	input[type="checkbox"]:checked + span {
		background-color: #1877f2;
		border-color: #1877f2;
	}

	input[type="checkbox"]:checked + span:after {
		content: "\\2713";
		width: unset;
		height: unset;
	}

	&:hover > input + span:after {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledCheckboxSpan = styled.span`
	position: relative;
	display: inline-block;
	top: 0;
	left: 0;
	width: 1.375rem;
	height: 1.375rem;
	border: 2px solid ${({ theme }) => theme.colors.textSecondary};
	transition: background 0.3s;
	border-radius: 0.25rem;

	&:after {
		position: absolute;
		content: "";
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-weight: bold;
	}
`;

export const StyledCheckboxLabelText = styled.span`
	font-size: 0.95rem;
	font-weight: 500;
`;
