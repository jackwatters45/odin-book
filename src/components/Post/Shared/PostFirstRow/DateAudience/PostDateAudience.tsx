import { IPost } from "@/types/IPost";
import getAudienceIcon from "@/utils/audience/getAudienceIcon";
import Icon from "@mdi/react";
import { StyledPostDateAudienceRow } from "./PostDateAudience.styles";

interface PostDateAudienceProps {
	post: IPost;
}

const PostDateAudience = ({ post }: PostDateAudienceProps) => (
	<StyledPostDateAudienceRow title={new Date(post.createdAt).toLocaleString()}>
		<span>
			{new Date(post.createdAt).toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})}
		</span>
		<span>·</span>
		<Icon title={post.audience} path={getAudienceIcon(post.audience)} size={0.5} />
	</StyledPostDateAudienceRow>
);

export default PostDateAudience;
