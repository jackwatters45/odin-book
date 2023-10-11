import styled from "styled-components";

export const StyledPhotosContainer = styled.div<{ $columns?: number }>`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	gap: 0.75rem;

	@media (min-width: 960px) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

export const StyledPhoto = styled.div`
	border-radius: 0.25rem;

	> a {
		> img {
			width: 100%;
			height: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
		}
	}
`;

export const StyledPhotoPlaceholder = styled.div`
	min-height: 160px;
	border-radius: 0.25rem;
`;
