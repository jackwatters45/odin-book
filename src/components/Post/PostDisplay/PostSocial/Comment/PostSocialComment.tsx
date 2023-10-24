import Icon from "@mdi/react";
import { mdiCommentOutline } from "@mdi/js";

import { StyledSocialOptionButton } from "../PostSocial.styles";

interface PostSocialCommentProps {
	handleClickComment: () => void;
}

const PostSocialComment = ({ handleClickComment }: PostSocialCommentProps) => {
	return (
		<StyledSocialOptionButton onClick={handleClickComment}>
			<Icon path={mdiCommentOutline} size={0.9} />
			<span>Comment</span>
		</StyledSocialOptionButton>
	);
};

export default PostSocialComment;
