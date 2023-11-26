import styled from "styled-components";
import { NavLink } from "react-router-dom";

import FriendCardMutualFriends from "../HomeSection/Cards/Card/MutualFriends/FriendCardMutualFriends";

export const StyledNavFriendCardLink = styled(NavLink)`
	z-index: 1;

	display: flex;
	gap: 1rem;
	width: 100%;
	min-width: 300px;

	border-radius: 0.375rem;
	padding: 0.5rem 0.375rem;

	&:hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&.active {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledNavFriendCardTextContent = styled.div`
	padding: 0.25rem 0rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	gap: 0.5rem;
`;

export const StyledNavFriendCardUserName = styled.span`
	font-size: 0.95rem;
	font-weight: 600;
	font-size: 1.05rem;
	display: block;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledNavFriendCardMutualFriends = styled(FriendCardMutualFriends)`
	font-size: 0.8rem;
`;

export const StyledNavFriendCardButtonContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	grid-column: 2 / 3;
	max-width: 300px;
	align-self: flex-end;
	width: 100%;

	& > button {
		flex-grow: 1;
		z-index: 3;
	}
`;
