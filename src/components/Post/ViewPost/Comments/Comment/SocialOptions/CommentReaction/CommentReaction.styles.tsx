import { StyledHoverOptions } from "@/components/Post/PostDisplay/PostSocial/Reaction/PostSocialReaction.styles";
import { StyledReactionsContainer } from "@/components/Post/PostDisplay/PostSocialDisplay/PostSocialDisplay.styles";
import styled from "styled-components";

export const StyledCommentReactionsContainer = styled(StyledReactionsContainer)`
	font-size: inherit;
	position: relative;
`;

export const StyledCommentHoverOptions = styled(StyledHoverOptions)`
	bottom: 0.75rem;
	left: 0;
	height: 32px;

	padding: 0 0.25rem;
	font-size: 1rem;
`;

export const StyledCommentLikeButton = styled.button<{ $isReaction: boolean }>`
	${({ $isReaction, theme }) => $isReaction && `color: ${theme.colors.blueText};`}
`;
