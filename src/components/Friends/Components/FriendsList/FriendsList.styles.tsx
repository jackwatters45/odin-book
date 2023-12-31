import { ContainerWidth } from "@/components/User/UserProfile/context/ContainerWidthType";
import styled from "styled-components";

export const StyledFriendsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-right: -0.5rem;
`;

export const StyledFriendCard = styled.div<ContainerWidth>`
	position: relative;
	height: 3.5rem;
	width: calc(50% - 0.5rem);
	border-radius: 0.5rem;

	display: flex;
	align-items: center;
	padding: 0.5rem;
	gap: 0.5rem;

	${({ theme }) => theme.sectionShadow};

	${({ $containerWidth }) => {
		if ($containerWidth <= 700) {
			return `
        width: 100%;
      `;
		} else if ($containerWidth >= 900) {
			return `
        height: 100px;
        padding: 1rem;
      `;
		}
	}}
`;

export const StyledFriendAvatar = styled.img<ContainerWidth>`
	width: 2.25rem;
	height: 2.25rem;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	border-radius: 0.5rem;

	${({ $containerWidth }) => {
		if ($containerWidth >= 900) {
			return `
				width: 5rem;
				height: 5rem;
			`;
		}
	}}
`;

export const StyledUserNameMutualFriendsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 0.25rem;

	a:hover {
		text-decoration: underline;
	}
`;

export const StyledMutualFriends = styled.span`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 0.8rem;
`;

export const StyledFriendPlaceholder = styled.div<ContainerWidth>`
	position: relative;
	height: 3.5rem;
	width: calc(50% - 0.5rem);
	border-radius: 0.5rem;

	${({ $containerWidth }) => {
		if ($containerWidth >= 900) {
			return `
				height: 100px;
				padding: 1rem;
			`;
		}
	}}
`;
