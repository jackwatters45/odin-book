import { StyledDialogMoreOptions } from "@/components/Shared/MoreOptions/MoreOptions.styles";
import styled from "styled-components";

export const StyledCommentSortContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 0.75rem;
`;

export const StyledCommentSortButton = styled.button`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-weight: 600;
	font-size: 0.95rem;
	display: flex;
	position: relative;
`;

export const StyledCommentSortDialogMoreOptions = styled(StyledDialogMoreOptions)`
	top: 1rem;
`;

export const StyledCommentSortAnchor = styled.div`
	position: relative;
`;
