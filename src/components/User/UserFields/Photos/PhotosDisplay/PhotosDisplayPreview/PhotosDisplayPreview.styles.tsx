import styled from "styled-components";
import { StyledPhoto, StyledPhotosContainer } from "../PhotosDisplay.styles";

export const StyledPhotosPreviewContainer = styled(StyledPhotosContainer)`
	gap: 0.25rem;
	display: flex;
	flex-wrap: wrap;
`;

type StyledPhotoPreviewProps = {
	$BorderRadius: string;
};

export const StyledPhotoPreview = styled(StyledPhoto)<StyledPhotoPreviewProps>`
	width: calc(33.333% - 0.25rem);
	border-radius: unset;
	${({ $BorderRadius }) => $BorderRadius};
`;
