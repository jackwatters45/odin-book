import { Fragment } from "react";

import {
	StyledDashboardContainer,
	StyledDashboardContentContainer,
	StyledLoadingContainer,
	StyledNoMorePosts,
	StyledPostsContainer,
} from "./Dashboard.styles";
import CreatePostButton from "./User/UserProfile/Pages/UserPosts/CreatePostButton";
import Loading from "./Shared/Loading";
import PostDisplay from "./Post/PostDisplay";
import useDashboard from "./useDashboard";

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
				{isFetchingNextPage ? (
					<StyledLoadingContainer>
						<Loading />
					</StyledLoadingContainer>
				) : !hasNextPage && !isLoading ? (
					<StyledNoMorePosts>No more posts...</StyledNoMorePosts>
				) : (
					<div
						ref={ref}
						style={{
							width: "100%",
							height: "1px",
						}}
					/>
				)}
			</StyledDashboardContentContainer>
		</StyledDashboardContainer>
	);
};

export default Dashboard;
