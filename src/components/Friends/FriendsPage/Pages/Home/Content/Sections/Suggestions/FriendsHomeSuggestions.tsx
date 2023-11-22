import InfiniteScrollLoading from "@/components/Shared/InfiniteScrollLoading";
import FriendsHomeSection from "../../../../../Components/HomeSection/FriendsHomeSection";
import useFriendsHomeSuggestions from "./useFriendsHomeSuggestions";

const FriendsHomeSuggestions = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage } =
		useFriendsHomeSuggestions();

	return (
		<FriendsHomeSection
			title="People You May Know"
			link="/friends/suggestions"
			users={users}
		>
			<InfiniteScrollLoading
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
