import NavWithFriendResults from "../../../../../Shared/NavWithUserResults";
import {
	StyledUserNavHr,
	StyledSubtitle,
} from "@/components/Shared/NavWithUserResults/NavWithUserResults.styles";
import useFriendsRequestsNav from "./useFriendsRequestsNav";
import { InfiniteScrollLoadingFriendsNav } from "@/styles/SharedStyles";

const FriendsRequestsNav = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage, requestsCount } =
		useFriendsRequestsNav();

	return (
		<NavWithFriendResults
			title="Friend Requests"
			users={users}
			to="requests"
			noResultsText="No friend requests"
			isLoading={isLoading}
			scrollLoader={
				<InfiniteScrollLoadingFriendsNav
					isFetchingNextPage={isFetchingNextPage}
					hasNextPage={hasNextPage}
					isLoading={isLoading}
					ref={ref}
				/>
			}
		>
			<StyledUserNavHr />
			{requestsCount > 0 && (
				<StyledSubtitle>
					{`${requestsCount} Friend Request${requestsCount > 1 ? "s" : ""}`}
				</StyledSubtitle>
			)}
		</NavWithFriendResults>
	);
};

export default FriendsRequestsNav;
