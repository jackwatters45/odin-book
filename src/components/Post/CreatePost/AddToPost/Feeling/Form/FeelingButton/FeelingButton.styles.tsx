import styled from "styled-components";

export const StyledFeelingButton = styled.button`
	width: 50%;
	padding: 0.5rem;
	display: flex;
	gap: 0.75rem;
	align-items: center;
	z-index: 1100;
	font-size: 0.9rem;
	border-radius: 0.5rem;

	&.active {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&.active {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.darkHoverOverlay};
	}
`;
