import { Link } from "react-router-dom";
import styled from "styled-components";

// width: middle part needs fix
export const StyledFriendCard = styled.div`
	border-radius: 0.375rem;
	background: ${({ theme }) => theme.colors.backgroundPrimary};
	${({ theme }) => theme.sectionShadow};

	min-width: 150px;
	max-width: 250px;

	display: flex;
	flex-direction: column;
`;

export const StyledFriendCardImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 0.375rem 0.375rem 0 0;
	aspect-ratio: 1 / 1;
`;

export const StyledFriendCardTextContent = styled.div`
	padding: 0.75rem;
`;

export const StyledFriendCardUserName = styled(Link)`
	font-weight: 600;
	font-size: 1.05rem;
	display: block;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover {
		text-decoration: underline;
	}
`;

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

export const StyledFriendCardButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
	gap: 0.375rem;
	align-items: center;

	button {
		width: 100%;
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
