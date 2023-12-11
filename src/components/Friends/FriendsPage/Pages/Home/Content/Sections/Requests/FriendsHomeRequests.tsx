import FriendsHomeSection from "../../../../../Components/HomeSection/FriendsHomeSection";
import useFriendsHomeRequests from "./useFriendsHomeRequests";
import {
	InfiniteScrollLoadingUserPreviewCardRequests,
	StyledPlaceholderDiv,
	StyledStandardButtonFullWidth,
} from "./FriendsHomeRequests.styles";

const FriendsHomeRequests = () => {
	const {
		users,
		itemsToShow,
		ref,
		isFetchingNextPage,
		hasNextPage,
		isLoading,
		isViewMore,
		showViewMore,
		handleClickViewMore,
		setItemsPerRow,
	} = useFriendsHomeRequests();

	return (
		<FriendsHomeSection
			title="Friend Requests"
			link="/friends/requests"
			users={isViewMore ? users : users.slice(0, itemsToShow)}
			isLoading={isLoading}
			setItemsPerRow={setItemsPerRow}
		>
			{isViewMore && (
				<>
					<InfiniteScrollLoadingUserPreviewCardRequests
						isFetchingNextPage={isFetchingNextPage}
						hasNextPage={hasNextPage}
						isLoading={isLoading}
						ref={ref}
					/>
					<StyledPlaceholderDiv />
				</>
			)}
			{showViewMore && (
				<StyledStandardButtonFullWidth
					text="View More"
					colorClass="transparent-blue"
					onClick={handleClickViewMore}
				/>
			)}
		</FriendsHomeSection>
	);
};

export default FriendsHomeRequests;
