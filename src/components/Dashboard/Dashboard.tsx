import { Fragment } from "react";

import CreatePostButton from "../User/UserProfile/Pages/UserPosts/CreatePostButton";
import Loading from "../Shared/Loading";
import PostDisplay from "../Post/PostDisplay";
import useDashboard from "./useDashboard";
import InfiniteScrollLoading from "../Shared/InfiniteScrollLoading";
import {
	StyledDashboardContainer,
	StyledDashboardContentContainer,
	StyledPostsContainer,
} from "./Dashboard.styles";

const Dashboard = () => {
	const { currentUser, posts, isLoading, ref, isFetchingNextPage, hasNextPage } =
		useDashboard();

	return (
		<StyledDashboardContainer>
			<StyledDashboardContentContainer>
				<StyledPostsContainer>
					<CreatePostButton
						userFirstName={currentUser?.firstName as string}
						userFullName={currentUser?.fullName as string}
						userIcon={currentUser?.avatarUrl}
					/>
					{isLoading ? (
						<Loading />
					) : (
						posts?.pages.map((group, i) => (
							<Fragment key={i}>
								{group.map((post) => (
									<PostDisplay key={post._id} post={post} />
								))}
							</Fragment>
						))
					)}
				</StyledPostsContainer>
				<InfiniteScrollLoading
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
			</StyledDashboardContentContainer>
		</StyledDashboardContainer>
	);
};

export default Dashboard;
