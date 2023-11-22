import NavWithFriendResults from "../../../Components/NavWithFriendResults/NavWithFriendResults";
import { StyledSubtitleSuggestions } from "./FriendsSuggestionsNav.styles";
import useFriendsHomeSuggestions from "../../Home/Content/Sections/Suggestions/useFriendsHomeSuggestions";
import InfiniteScrollLoading from "@/components/Shared/InfiniteScrollLoading";

const FriendsRequestsContent = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage } =
		useFriendsHomeSuggestions();

	return (
		<NavWithFriendResults
			title="Suggestions"
			users={users}
			to="suggestions"
			scrollLoader={
				<InfiniteScrollLoading
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
