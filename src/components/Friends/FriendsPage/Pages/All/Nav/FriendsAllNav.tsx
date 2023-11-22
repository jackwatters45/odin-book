import NavWithFriendResults from "@/components/Friends/FriendsPage/Components/NavWithFriendResults";
import { StyledHrAll, StyledSearchInput } from "./FriendsAllNav.styles";
import useFriendsAllNav from "./useFriendsAllNav";
import InfiniteScrollLoading from "@/components/Shared/InfiniteScrollLoading";

const FriendsAllNav = () => {
	const { users, isLoading, ref, isFetchingNextPage, hasNextPage, register, q } =
		useFriendsAllNav();

	return (
		<NavWithFriendResults
			title="All Friends"
			users={users}
			to="all"
			isLoading={isLoading}
			noResultsText={q ? `No friends named "${q}"` : "No friends"}
			scrollLoader={
				<InfiniteScrollLoading
					isFetchingNextPage={isFetchingNextPage}
					hasNextPage={hasNextPage}
					isLoading={isLoading}
					ref={ref}
				/>
			}
		>
			<StyledSearchInput
				id={"friends-all-nav-search"}
				register={register("friends-all-nav-search")}
				placeholder="Search friends"
			/>
			<StyledHrAll />
		</NavWithFriendResults>
	);
};

export default FriendsAllNav;
