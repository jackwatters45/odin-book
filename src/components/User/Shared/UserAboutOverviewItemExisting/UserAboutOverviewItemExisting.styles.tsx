import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledUserAboutOverviewItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const StyledUserAboutOverviewItemTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 0.95rem;
	line-height: 1.34;
	flex-grow: 1;
`;

export const StyledUserAboutOverviewLink = styled(Link)`
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover {
		text-decoration: underline;
	}
`;

export const StyledUserAboutOverviewItemSubtitle = styled.div`
	font-size: 0.75rem;

	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledUserAboutOverviewItemRightColumn = styled.span`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;
