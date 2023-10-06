import { Suspense, lazy } from "react";

import UserIntro from "./UserIntro";
import useUserPosts from "./useUserPosts";
import CreatePostButton from "./CreatePostButton";
import PostViewOptions from "./PostViewOptions";
import {
	UserPostsContainer,
	StyledUserPostsRightColumn,
	StyledUserPostsLeftColumn,
} from "./UserPosts.styles";
import UserPhotos from "./PhotosPreview";
import Loading from "@/components/Shared/Loading";
import UserPostsDisplay from "./UserPostsDisplay";

const UserFriends = lazy(() => import("./FriendsPreview"));
const UserLifeEvents = lazy(
	() => import("../../../UserFields/LifeEvents/LifeEventsPreview"),
);

const UserPosts = () => {
	const { user, top, leftSidebarRef } = useUserPosts();

	return (
		<UserPostsContainer>
			<StyledUserPostsLeftColumn ref={leftSidebarRef} style={{ top }}>
				<UserIntro user={user} />
				<UserPhotos />

				<Suspense fallback={<Loading />}>
					<UserFriends />
					<UserLifeEvents />
				</Suspense>
			</StyledUserPostsLeftColumn>
			<StyledUserPostsRightColumn>
				<CreatePostButton userIcon={user?.avatarUrl} />
				<PostViewOptions />
				<UserPostsDisplay />
			</StyledUserPostsRightColumn>
		</UserPostsContainer>
	);
};

export default UserPosts;
