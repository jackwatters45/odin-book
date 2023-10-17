import styled from "styled-components";

export const StyledAddToPostButton = styled.button<{
	$activeColor?: string;
}>`
	border-radius: 50%;
	padding: 0.25rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;

	&.active {
		background-color: ${({ $activeColor }) => $activeColor ?? "transparent"};
	}

	&::before {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		border-radius: inherit;
	}

	&:hover::before {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
