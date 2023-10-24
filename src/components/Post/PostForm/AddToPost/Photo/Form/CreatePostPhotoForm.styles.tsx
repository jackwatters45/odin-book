import styled from "styled-components";
import { StyledLabel } from "./PhotosPreview/CreatePostPhotosPreview.styles";

export const StyledCreatePostPhotoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	border-radius: 0.375rem;
	border: 1px solid ${({ theme }) => theme.colors.border};
	position: relative;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	cursor: pointer;

	&:hover ${StyledLabel} {
		visibility: visible;
	}

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 0.375rem;
		margin: 0.5rem;
		pointer-events: none;
	}

	&:hover::before {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
