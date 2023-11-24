import NavWithFriendResults from "../../../../../Shared/NavWithUserResults/NavWithUserResults";
import { StyledSubtitleSuggestions } from "./FriendsSuggestionsNav.styles";
import useFriendsHomeSuggestions from "../../Home/Content/Sections/Suggestions/useFriendsHomeSuggestions";

import { InfiniteScrollLoadingFriendsNav } from "@/styles/SharedStyles";

const FriendsRequestsContent = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage } =
		useFriendsHomeSuggestions();

	return (
		<NavWithFriendResults
			title="Suggestions"
			users={users}
			to="suggestions"
			scrollLoader={
				<InfiniteScrollLoadingFriendsNav
					isFetchingNextPage={isFetchingNextPage}
					hasNextPage={hasNextPage}
					isLoading={isLoading}
					noMoreText="No more suggestions..."
					ref={ref}
				/>
			}
		>
			<StyledSubtitleSuggestions>People you may know</StyledSubtitleSuggestions>
		</NavWithFriendResults>
	);
};

export default FriendsRequestsContent;
