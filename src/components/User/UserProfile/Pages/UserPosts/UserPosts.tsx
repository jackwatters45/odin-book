import UserIntro from "./UserIntro";
import useUserPosts from "./useUserPosts";
import CreatePostButton from "./CreatePostButton";
import {
	UserPostsContainer,
	StyledUserPostsRightColumn,
	StyledUserPostsLeftColumn,
	StyledPostsContainer,
} from "./UserPosts.styles";
import UserPhotos from "./PhotosPreview";
import UserFriends from "./FriendsPreview";
import Loading from "@/components/Shared/Loading";
import UserPostDisplay from "@/components/Post/PostDisplay";
import { InfiniteScrollLoadingPosts } from "@/styles/SharedStyles";

const UserPosts = () => {
	const {
		currentUserAvatar,
		containerWidth,
		user,
		leftSidebarRef,
		top,
		posts,
		isLoading,
		ref,
		isFetchingNextPage,
		hasNextPage,
	} = useUserPosts();

	return (
		<UserPostsContainer $containerWidth={containerWidth}>
			<StyledUserPostsLeftColumn
				ref={leftSidebarRef}
				style={{ top }}
				$containerWidth={containerWidth}
			>
				<UserIntro user={user} />
				<UserPhotos />
				<UserFriends />
			</StyledUserPostsLeftColumn>
			<StyledUserPostsRightColumn>
				<CreatePostButton
					userFirstName={user.firstName}
					userFullName={user.fullName}
					userIcon={currentUserAvatar}
				/>
				<StyledPostsContainer>
					{isLoading ? (
						<Loading />
					) : (
						<>
							{posts?.map((post) => (
								<UserPostDisplay key={post._id} post={post} />
							))}
							{hasNextPage && (
								<InfiniteScrollLoadingPosts
									ref={ref}
									isFetchingNextPage={isFetchingNextPage}
									isLoading={isLoading}
									hasNextPage={hasNextPage}
								/>
							)}
						</>
					)}
				</StyledPostsContainer>
			</StyledUserPostsRightColumn>
		</UserPostsContainer>
	);
};

export default UserPosts;
