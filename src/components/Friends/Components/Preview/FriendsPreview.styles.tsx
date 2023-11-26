import styled from "styled-components";

import { ContainerWidth } from "@/components/User/UserProfile/context/ContainerWidthType";

export const StyledFriendsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-right: -0.5rem;
`;

export const StyledFriend = styled.div<ContainerWidth>`
	width: calc(33.33% - 0.5rem);
	border-radius: 0.25rem;
	margin-bottom: 0.75rem;

	> a {
		display: block;
		> img {
			width: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
			margin-bottom: 0.375rem;
		}

		> span {
			font-size: 0.8rem;
			font-weight: 700;
			color: ${({ theme }) => theme.colors.textPrimary};
		}
	}

	${({ $containerWidth }) => {
		if ($containerWidth <= 576) {
			return `
			margin-bottom: 0.5rem;

		> a > img {
			margin-bottom: 0.25rem;
		}
			`;
		}
	}}
`;
