import UserIntro from "./UserIntro";
import styled from "styled-components";
import useUserPosts from "./useUserPosts";
import UserFriends from "./UserFriends/UserFriends";
import UserPhotos from "./UserPhotos/UserPhotos";
import UserLifeEvents from "./UserLifeEvents/UserLifeEvents";

export const UserPostsContainer = styled.div`
	display: gird;

	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	padding: 1rem 2rem;

	@media (max-width: 899px) {
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
`;

const UserPosts = () => {
	const { user } = useUserPosts();

	return (
		<UserPostsContainer>
			<div>
				<UserIntro user={user} />
				<UserPhotos />
				<UserFriends />
				<UserLifeEvents />
			</div>
			<div>
				<div>user create post</div>
				<div>post filter view</div>
				<div>posts</div>
			</div>
		</UserPostsContainer>
	);
};

export default UserPosts;
