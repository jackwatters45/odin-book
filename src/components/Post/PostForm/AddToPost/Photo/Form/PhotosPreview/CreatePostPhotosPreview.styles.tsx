import { StyledPostPhotos } from "@/components/Post/Shared/PostPhotos/PostPhotos.styles";
import StandardButton from "@/components/Shared/StandardButton";
import styled from "styled-components";

export const StyledAddMorePhotosButton = styled(StandardButton)`
	pointer-events: none;
`;

export const StyledLabel = styled.label`
	position: absolute;
	z-index: 1011;
	top: 1.25rem;
	left: 1.25rem;
	visibility: hidden;
	cursor: pointer;
`;

export const StyledPostPhotosPreview = styled(StyledPostPhotos)<{ $numPhotos: number }>`
	width: 100%;
	margin: 0;

	${({ $numPhotos }) =>
		$numPhotos === 1
			? "border-radius: 0.375rem;"
			: $numPhotos === 2
			? `
	& > div:nth-child(1){
		border-radius: 0.375rem 0 0 0.375rem;
	};
	& > div:nth-child(2){
		border-radius: 0 0.375rem 0.375rem 0;
	};`
			: `
	& > div:nth-child(1){
		border-radius: 0.375rem 0 0 0;
	};
	& > div:nth-child(2){
		border-radius: 0 0.375rem 0 0;
	};
	& > div:nth-child(3){
		border-bottom-left-radius: 0.375rem;
	};
	& > div:nth-last-child(1){
		border-bottom-right-radius: 0.375rem;
	};
			`}
`;

export const StyledImageContainer = styled.div`
	position: relative;
	line-height: 0;
	border-radius: inherit;
	cursor: default;

	> img {
		width: 100%;
	}
`;
