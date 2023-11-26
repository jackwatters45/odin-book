import { HTMLAttributes } from "react";

import { IPost } from "@/types/IPost";
import PostSocialReactions from "./Reaction";
import PostSocialComment from "./Comment";
import PostSocialOptionsShare from "./Share";
import { StyledSocialOptionsContainer } from "./PostSocial.styles";

interface PostSocialProps extends HTMLAttributes<HTMLDivElement> {
	post: IPost;
	handleClickComment: () => void;
}

const PostSocial = ({ post, handleClickComment, ...props }: PostSocialProps) => {
	return (
		<StyledSocialOptionsContainer {...props}>
			<PostSocialReactions post={post} />
			<PostSocialComment handleClickComment={handleClickComment} />
			<PostSocialOptionsShare post={post} />
		</StyledSocialOptionsContainer>
	);
};

export default PostSocial;
