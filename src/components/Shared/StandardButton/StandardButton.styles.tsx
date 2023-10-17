import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StandardButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.375rem;
`;

const StyledStandardButtonStyles = css`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	height: 2.25rem;
	padding: 0 0.75rem;
	gap: 0.5rem;
	line-height: 0;
	border-radius: 0.375rem;

	font-size: 0.95rem;
	font-weight: 700;
	line-height: normal;

	transition: all 0.2s ease-in-out;
	background-color: ${({ theme }) => theme.colors.primaryButton};

	&:hover::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: inherit;
	}

	&.underline-hover {
		&:hover {
			text-decoration: underline;
		}
		&::before {
			content: none;
		}
	}

	&:disabled {
		cursor: not-allowed;
		color: #bcc0c4;
		background-color: ${({ theme }) => theme.colors.primaryButton};
	}

	&.blue {
		color: white;
		background-color: ${({ theme }) => theme.colors.blueButton};
	}

	&.overlay {
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
	}

	&.light-blue {
		color: ${({ theme }) => theme.colors.blueButton};
		background: ${({ theme }) => theme.colors.secondaryBlueButton};
	}

	&.white {
		background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	}

	&.transparent {
		background-color: transparent;
	}

	&.transparent-blue {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.blueButton};
	}
`;

export const StyledStandardButton = styled.button`
	${StyledStandardButtonStyles}
`;

export const StyledStandardButtonLink = styled(Link)`
	${StyledStandardButtonStyles}
`;
