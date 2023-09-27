import { StyledBodyText, StyledPostContentContainer } from "./PostContent.styles";

// TODO
type IPost = { body: string };
interface PostContentProps {
	post: IPost;
}

const PostContent = ({ post }: PostContentProps) => {
	return (
		<StyledPostContentContainer>
			<StyledBodyText>{post.body}</StyledBodyText>
		</StyledPostContentContainer>
	);
};

export default PostContent;
