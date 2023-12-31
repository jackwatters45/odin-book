import Loading from "../Shared/Loading";
import PostDisplay from "../Post/PostDisplay";
import useDashboard from "./useDashboard";
import { StyledCreatePostButton, StyledPostsContainer } from "./Dashboard.styles";
import {
	InfiniteScrollLoadingPosts,
	StyledCenteredContainer,
	StyledCenteredContainerContent,
} from "@/styles/SharedStyles";

const Dashboard = () => {
	const { currentUser, posts, isLoading, ref, isFetchingNextPage, hasNextPage } =
		useDashboard();

	return (
		<StyledCenteredContainer>
			<StyledCenteredContainerContent>
				<StyledPostsContainer>
					<StyledCreatePostButton
						userFirstName={currentUser?.firstName as string}
						userFullName={currentUser?.fullName as string}
						userIcon={currentUser?.avatarUrl}
					/>
					{isLoading ? (
						<Loading />
					) : (
						posts?.map((post) => <PostDisplay key={post._id} post={post} />)
					)}
				</StyledPostsContainer>
				<InfiniteScrollLoadingPosts
					ref={ref}
					isFetchingNextPage={isFetchingNextPage}
					isLoading={isLoading}
					hasNextPage={hasNextPage}
					noMoreText={
						currentUser?.friends && currentUser?.friends.length > 20
							? "No more posts to display..."
							: currentUser?.friends && currentUser?.friends.length > 0
							? "No more posts to display... add more friends to see more posts!"
							: "No posts to display... add friends to see posts!"
					}
				/>
			</StyledCenteredContainerContent>
		</StyledCenteredContainer>
	);
};

export default Dashboard;
