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
export const StyledPhotoPreviewContainer = styled.div<{ $numPreviews: number }>`
	width: 450px;

	min-height: 220px;
	border-radius: 0.375rem;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};

	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-auto-rows: 220px;

	:last-child {
		grid-column: ${({ $numPreviews }) =>
			$numPreviews % 2 === 1 && $numPreviews < 6 ? "1 / 3" : "1 / 2"};
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
