import NavWithFriendResults from "@/components/Shared/NavWithUserResults";
import { StyledHrAll, StyledSearchInput } from "./FriendsAllNav.styles";
import useFriendsAllNav from "./useFriendsAllNav";
import { InfiniteScrollLoadingFriendsNav } from "@/styles/SharedStyles";

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
				<InfiniteScrollLoadingFriendsNav
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
