import styled from "styled-components";

import { ContainerWidth } from "../../context/ContainerWidthType";

export const StyledUserAboutSectionContainer = styled.div<
	ContainerWidth & { $isOwnProfile: boolean }
>`
	width: 100%;
	background-color: #ffffff;
	border-radius: 0.25rem;
	${(props) => props.theme.sectionShadow}
	display: flex;

	> div {
		padding: 1rem;
	}

	> div:first-child {
		border-right: 1px solid #dddfe2;
		width: 38%;
	}

	> div:last-child {
		width: 62%;
	}

	${({ $isOwnProfile, $containerWidth }) => {
		if ($isOwnProfile) {
			if ($containerWidth <= 768) {
				return `
			flex-direction: column;

		> div:first-child {
			width: 100%;
			border-right: none;
			border-bottom: 1px solid #dddfe2;
		}

		> div:last-child {
			width: 100%;
		}
			`;
			}
		} else {
			if ($containerWidth <= 676) {
				return `
			flex-direction: column;

		> div:first-child {
			width: 100%;
			border-right: none;
			border-bottom: 1px solid #dddfe2;
		}

		> div:last-child {
			width: 100%;
		}
			`;
			}
		}
	}}
`;

export const StyledUserAboutRightColumn = styled.div`
	position: relative;
	padding-bottom: 1rem;
`;
