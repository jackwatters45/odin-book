import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledHr } from "@/styles/SharedStyles";

export const StyledNavFriendsHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding-top: 0.5rem;
`;

export const StyledBackLink = styled(Link)`
	border-radius: 50%;
	padding: 0.25rem;
	margin-left: -0.5rem;

	display: flex;
	align-items: center;
	line-height: 0;

	svg {
		margin-top: 2px;
	}

	&:hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledNavFriendsLink = styled(Link)`
	font-size: 0.85rem;
	margin-left: 2px;
`;

export const StyledNavFriendsCardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledSubtitle = styled.h4`
	font-size: 1.05rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const StyledFriendsNavHr = styled(StyledHr)`
	margin: 0.5rem 0 0.75rem;
`;

export const StyledNoResultsText = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledLoadingPosition = styled.div`
	height: 60px;
	position: relative;
`;
