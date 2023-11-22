import styled from "styled-components";

export const StyledFriendsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-right: -0.5rem;
`;

export const StyledFriend = styled.div`
	width: calc(33.33% - 0.5rem);
	border-radius: 0.25rem;
	margin-bottom: 1.5rem;

	> a {
		display: block;
		> img {
			width: 100%;
			aspect-ratio: 1 / 1;
			object-fit: cover;
			margin-bottom: 0.75rem;
		}

		> span {
			font-size: 0.75rem;
			font-weight: 700;
			color: ${({ theme }) => theme.colors.textPrimary};
		}
	}
`;
