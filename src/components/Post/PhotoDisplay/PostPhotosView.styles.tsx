import styled, { css } from "styled-components";

export const StyledPostPhotosViewContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.textPrimary};
	color: ${({ theme }) => theme.colors.backgroundSecondary};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const StyledForwardBackButtons = styled.div`
	position: absolute;
	top: 60px;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const SharedButtonStyles = css`
	height: 100%;
	padding: 1rem 1rem 76px;

	&:hover {
		> svg {
			background-color: rgba(255, 255, 255, 0.5);
		}
	}
`;

export const StyledNextButton = styled.button`
	${SharedButtonStyles}

	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: translateX(0.375rem);
	}
`;

export const StyledPreviousButton = styled.button`
	${SharedButtonStyles}

	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: translateX(-0.275rem);
	}
`;

export const StyledDisplayedImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
