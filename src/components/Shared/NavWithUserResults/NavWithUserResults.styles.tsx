import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledHr } from "@/styles/SharedStyles";
import { StyledFriendsNav } from "@/components/Friends/FriendsPage/Pages/Home/Nav/FriendsHomeNav.styles";

export const StyledUserNavPadding = styled(StyledFriendsNav)`
	padding: 0.75rem;
`;

export const StyledNavHeaderH2 = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
`;

export const StyledNavUserHeader = styled.div`
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

export const StyledNavUserLink = styled(Link)`
	font-size: 0.85rem;
	margin-left: 2px;
`;

export const StyledNavUserCardContainer = styled.div<{ $isPreview: boolean }>`
	${({ $isPreview, theme }) =>
		$isPreview
			? `	display: flex;
	flex-direction: column;
	position: relative;`
			: `
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	> a {
		width: calc(50% - 0.5rem);
		${theme.sectionShadow}	

		@media (max-width: 631px) {
			width: 100%;
		}
	}
	`}
`;

export const StyledSubtitle = styled.h4`
	font-size: 1.05rem;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const StyledUserNavHr = styled(StyledHr)`
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
