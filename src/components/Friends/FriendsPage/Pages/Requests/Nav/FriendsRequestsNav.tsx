import NavWithFriendResults from "../../../Components/NavWithFriendResults";
import {
	StyledFriendsNavHr,
	StyledSubtitle,
} from "@/components/Friends/FriendsPage/Components/NavWithFriendResults/NavWithFriendResults.styles";
import useFriendsRequestsNav from "./useFriendsRequestsNav";
import InfiniteScrollLoading from "@/components/Shared/InfiniteScrollLoading";

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
				<InfiniteScrollLoading
					isFetchingNextPage={isFetchingNextPage}
					hasNextPage={hasNextPage}
					isLoading={isLoading}
					ref={ref}
				/>
			}
		>
			<StyledFriendsNavHr />
			{requestsCount > 0 && (
				<StyledSubtitle>
					{`${requestsCount} Friend Request${requestsCount > 1 && "s"}`}
				</StyledSubtitle>
			)}
		</NavWithFriendResults>
	);
};

export default FriendsRequestsNav;
