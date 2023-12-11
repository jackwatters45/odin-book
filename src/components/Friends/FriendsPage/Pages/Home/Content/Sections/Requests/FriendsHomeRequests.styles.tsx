import styled from "styled-components";

import { StandardButtonFullWidth } from "@/styles/SharedStyles";
import { InfiniteScrollLoadingUserPreviewCard } from "../Suggestions/FriendsHomeSuggestions.styles";

export const StyledStandardButtonFullWidth = styled(StandardButtonFullWidth)`
	margin: 1rem 1rem 0;
	width: calc(100% - 2rem);
`;

export const StyledPlaceholderDiv = styled.div`
	height: 1rem;
	width: 100%;
`;

export const InfiniteScrollLoadingUserPreviewCardRequests = styled(
	InfiniteScrollLoadingUserPreviewCard,
)`
	bottom: 80%;
`;
