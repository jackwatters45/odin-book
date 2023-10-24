import Icon from "@mdi/react";
import { mdiShareOutline } from "@mdi/js";

import { StyledSocialOptionButton } from "../PostSocial.styles";
import usePostSocialShare from "./usePostSocialShare";
import { IPost } from "@/types/IPost";

interface PostSocialReactionProps {
	post: IPost;
}

const PostSocialShare = ({ post }: PostSocialReactionProps) => {
	const { handleClickShare } = usePostSocialShare({ post });

	return (
		<StyledSocialOptionButton onClick={handleClickShare}>
			<Icon path={mdiShareOutline} size={0.9} />
			<span>Share</span>
		</StyledSocialOptionButton>
	);
};

export default PostSocialShare;
