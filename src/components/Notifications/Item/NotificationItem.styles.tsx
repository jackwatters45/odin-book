import styled from "styled-components";

import FriendCardButtons from "@/components/Friends/FriendsPage/Components/HomeSection/Cards/Card/Buttons/FriendCardButtons";

export const StyledNotificationItemContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex: 1;
`;

export const StyledNotificationItemMiddleRow = styled.div`
	flex: 1;
	align-self: flex-start;

	&.read {
		> span,
		> div > span,
		div > span a {
			color: ${({ theme }) => theme.colors.textSecondary};
		}

		 {
			color: ${({ theme }) => theme.colors.textSecondary};
		}
	}
`;

export const StyledNotificationFriendRequestButtons = styled(FriendCardButtons)`
	display: flex;
	flex-direction: row;
	margin-top: 2rem;
	width: 100%;

	button {
		flex: 1;
	}
`;

export const StyledResponseText = styled.span`
	font-size: 0.95rem;
	display: block;
	margin-top: 0.25rem;
`;
