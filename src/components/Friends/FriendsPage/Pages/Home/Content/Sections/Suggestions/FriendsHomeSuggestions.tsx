import FriendsHomeSection from "../../../../../Components/HomeSection/FriendsHomeSection";
import { InfiniteScrollLoadingUserPreviewCard } from "./FriendsHomeSuggestions.styles";
import useFriendsHomeSuggestions from "./useFriendsHomeSuggestions";

const FriendsHomeSuggestions = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage, setItemsPerRow } =
		useFriendsHomeSuggestions();

	return (
		<FriendsHomeSection
			title="People You May Know"
			link="/friends/suggestions"
			users={users}
			setItemsPerRow={setItemsPerRow}
		>
			<InfiniteScrollLoadingUserPreviewCard
				isFetchingNextPage={isFetchingNextPage}
				hasNextPage={hasNextPage}
				isLoading={isLoading}
				noMoreText="No more suggestions..."
				ref={ref}
			/>
		</FriendsHomeSection>
	);
};

export default FriendsHomeSuggestions;
