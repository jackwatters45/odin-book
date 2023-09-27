import Icon from "@mdi/react";
import { mdiCommentOutline, mdiShareOutline, mdiThumbUpOutline } from "@mdi/js";

import {
	StyledSocialOptionButton,
	StyledSocialOptionsContainer,
} from "./PostSocialOptions.styles";

const PostSocialOptions = () => {
	return (
		<StyledSocialOptionsContainer>
			<StyledSocialOptionButton>
				<Icon path={mdiThumbUpOutline} size={0.9} />
				<span>Like</span>
			</StyledSocialOptionButton>
			<StyledSocialOptionButton>
				<Icon path={mdiCommentOutline} size={0.9} />
				<span>Comment</span>
			</StyledSocialOptionButton>
			{/* TODO something about audience type -> share */}
			<StyledSocialOptionButton>
				<Icon path={mdiShareOutline} size={0.9} />
				<span>Share</span>
			</StyledSocialOptionButton>
		</StyledSocialOptionsContainer>
	);
};

export default PostSocialOptions;
