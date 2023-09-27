import styled from "styled-components";

type RadioOptions = { size: number };
export const StyledRadioContainer = styled.div<RadioOptions>`
	position: relative;
	padding-left: ${({ size }) => size * 1.25}rem;
	cursor: pointer;
	margin-bottom: ${({ size }) => size * 1.1}rem;

	input:checked ~ span {
		border: 2px solid ${({ theme }) => theme.colors.blueButton};
	}

	input:checked ~ span:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: ${({ size }) => size * 0.5}rem;
		height: ${({ size }) => size * 0.5}rem;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.blueButton};
	}

	> span:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: ${({ size }) => size * 1.65}rem;
		height: ${({ size }) => size * 1.65}rem;

		border-radius: 50%;
	}

	background: ${({ theme }) => theme.colors.backgroundSecondary};
	&:hover input ~ span {
		border: 2px solid ${({ theme }) => theme.colors.blueButton};
	}

	> span {
		height: ${({ size }) => size}rem;
		width: ${({ size }) => size}rem;
	}
`;

export const StyledRadioInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

export const StyledRadioSpan = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.textSecondary};
`;
