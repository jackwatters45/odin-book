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

const UserPosts = () => {
	const { currentUserAvatar, user, leftSidebarRef, top, posts, isLoading } =
		useUserPosts();

	return (
		<UserPostsContainer>
			<StyledUserPostsLeftColumn ref={leftSidebarRef} style={{ top }}>
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
						posts?.map((post) => <UserPostDisplay key={post._id} post={post} />)
					)}
				</StyledPostsContainer>
			</StyledUserPostsRightColumn>
		</UserPostsContainer>
	);
};

export default UserPosts;
