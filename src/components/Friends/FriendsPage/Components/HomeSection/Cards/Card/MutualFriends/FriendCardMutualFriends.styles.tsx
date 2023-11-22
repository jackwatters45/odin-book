import styled from "styled-components";

export const StyledFriendCardMutualFriends = styled.div`
	display: flex;
	gap: 0.25rem;
	min-height: 1.25rem;

	cursor: pointer;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 0.925rem;

	img {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
`;
export const StyledFriendCardMutualFriendsImages = styled.div`
	position: relative;
	wrap: nowrap;

	:nth-child(2) {
		margin-left: -0.25rem;
	}
`;

export const StyledFriendCardMutualFriendsImageBorder = styled.img`
	outline: solid ${({ theme }) => theme.colors.backgroundPrimary} 2px;
	position: relative;
	z-index: 100;
`;
