import styled from "styled-components";
import { ContainerWidth } from "../../context/ContainerWidthType";

export const UserPostsContainer = styled.div<ContainerWidth>`
	display: flex;
	gap: 1rem;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	width: 100%;

	> :first-child {
		padding-bottom: 1rem;
	}

	${({ $containerWidth }) => {
		if ($containerWidth <= 899) {
			return `
				flex-direction: column;
				align-items: center;

				> :first-child {
					padding-bottom: 0;
				}
			`;
		}
	}}

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow-y: auto;
		height: 100%;

		${({ $containerWidth }) => {
			if ($containerWidth <= 909) {
				return `
					width: 100%;
					max-width: 680px;
					
				
				`;
			}
		}}
	}
`;

export const StyledUserPostsLeftColumn = styled.div<ContainerWidth>`
	width: 42%;

	${({ $containerWidth }) => {
		if ($containerWidth >= 900) {
			return `
			position: -webkit-sticky;
			position: sticky;`;
		}
	}}
`;

export const StyledUserPostsRightColumn = styled.div`
	width: 58%;
`;

export const StyledPostsContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
	position: relative;
	min-height: 100px;
	padding-bottom: 1rem;
`;
