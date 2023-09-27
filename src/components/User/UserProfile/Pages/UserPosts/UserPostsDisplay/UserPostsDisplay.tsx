import PostFirstRow from "./PostFirstRow";
import PostSocialOptions from "./PostSocialOptions";
import PostCommentInput from "./PostCommentInput";
import PostContent from "./PostContent";
import { StyledPostContainer } from "./UserPostsDisplay.styles";

const post = {
	id: "1",
	author: {
		id: "1",
		name: "John Doe",
		avatarUrl: "https://via.placeholder.com/150",
	},
	title: "Post 1",
	body: "Post 1 body",
	date: "2021-01-01",
	audience: "Public",
	addedTime: "2023-09-14",
	to: {
		id: "2",
		name: "Jane Doe",
	},
};

const posts = Array(15).fill(post);

const UserPostsDisplay = () => {
	return (
		posts?.length > 0 &&
		posts.map((post) => (
			<StyledPostContainer key={post.id}>
				<PostFirstRow author={post.author} date={post.date} to={post.to} />
				<PostContent post={post} />
				<PostSocialOptions />
				<PostCommentInput />
			</StyledPostContainer>
		))
	);
};

export default UserPostsDisplay;
