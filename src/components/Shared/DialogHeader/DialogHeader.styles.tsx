import styled from "styled-components";

export const HeaderDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 4rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	width: 100%;
	button {
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.primaryButton};

		&::before {
			content: "";
			width: 100%;
			height: 100%;
			display: block;
			position: absolute;
			border-radius: 50%;
			top: 0;
			left: 0;
			z-index: 1;
		}

		&:hover::before {
			background: ${({ theme }) => theme.colors.hoverOverlay};
		}
	}
`;

export const StyledDialogCloseButton = styled.button`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	display: flex;
	padding: 0.25rem;
`;

export const StyledDialogBackButton = styled.button`
	position: absolute;
	top: 0.75rem;
	left: 0.75rem;
	display: flex;
	padding: 0.25rem;
`;
