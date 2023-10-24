import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledPostPhotos = styled.div<{
	$numPhotos: number;
}>`
	min-height: 220px;
	border-radius: 0.375rem;
	background: transparent;

	width: calc(100% + 2rem);
	margin-left: -1rem;

	display: flex;
	flex-wrap: wrap;
	gap: 0.125rem;

	> * {
		border-radius: 0;
		width: calc(50% - 0.125rem);
		flex-grow: 1;
		aspect-ratio: 1 / 1;
		line-height: 0;

		img {
			height: 100%;

			object-fit: cover;
		}

		${({ $numPhotos }) => $numPhotos === 2 && "width: calc(50% - .125rem); "}
	}

	${({ $numPhotos }) =>
		$numPhotos >= 5 &&
		`
	> *:nth-last-child(1),
	> *:nth-last-child(2),
	> *:nth-last-child(3) {
		width: calc(33.333% - 0.125rem);
	}
`}
`;

export const StyledPostPhotoLink = styled(Link)`
	position: relative;
`;

export const StyledPostPhotoDiv = styled.div`
	position: relative;
`;

export const StyledPostPhoto = styled.img`
	width: 100%;
`;

export const StyledHiddenPhotosOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: 600;
	border-radius: inherit;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
`;
