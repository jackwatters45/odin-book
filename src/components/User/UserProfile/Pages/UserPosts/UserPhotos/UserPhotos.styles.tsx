import styled from "styled-components";

export const StyledPhotosContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem;
	margin-right: -0.25rem;

	> div:first-child {
		border-radius: 0.25rem 0 0 0;
	}

	> div:nth-child(3) {
		border-radius: 0 0.25rem 0 0;
	}

	> div:nth-child(7) {
		border-radius: 0 0 0 0.25rem;
	}

	> div:last-child {
		border-radius: 0 0 0.25rem 0;
	}
`;

export const StyledPhoto = styled.div`
	width: calc(33.33% - 0.25rem);

	> a {
		> img {
			width: 100%;
			height: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
		}
	}
`;
