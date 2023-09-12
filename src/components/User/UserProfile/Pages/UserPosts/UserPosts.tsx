import { lazy } from "react";

import UserIntro from "./UserIntro";
import useUserPosts from "./useUserPosts";
import CreatePostButton from "./CreatePostButton";
import PostViewOptions from "./PostViewOptions";
import { UserPostsContainer } from "./UserPosts.styles";
import UserPhotos from "./UserPhotos";

const UserFriends = lazy(() => import("./UserFriends/UserFriends"));
const UserLifeEvents = lazy(() => import("./UserLifeEvents/UserLifeEvents"));

const UserPosts = () => {
	const { user, LazyWrapper } = useUserPosts();

	return (
		<UserPostsContainer>
			<UserIntro user={user} />
			<UserPhotos />

			<LazyWrapper>
				<UserFriends />
				<UserLifeEvents />
			</LazyWrapper>

			<CreatePostButton userIcon={user?.avatarUrl} />
			<PostViewOptions />
			<div>posts</div>
		</UserPostsContainer>
	);
};

export default UserPosts;
