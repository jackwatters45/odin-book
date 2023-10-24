import { IPost } from "@/types/IPost";
import DateAudience from "./DateAudience";
import MoreOptions from "./MoreOptions";
import Title from "./Title/PostTitle";
import AuthorAvatar from "./AuthorAvatar";
import { StyledPostFirstRow, StyledPostFirstRowMiddle } from "./PostFirstRow.styles";
import { HTMLAttributes } from "react";

interface PostFirstRowProps extends HTMLAttributes<HTMLDivElement> {
	post: IPost;
	showMoreOptions?: boolean;
}

const PostFirstRow = ({ post, showMoreOptions = true, ...props }: PostFirstRowProps) => {
	return (
		<StyledPostFirstRow {...props}>
			<AuthorAvatar author={post.author} />
			<StyledPostFirstRowMiddle>
				<Title post={post} />
				<DateAudience post={post} />
			</StyledPostFirstRowMiddle>
			{showMoreOptions && <MoreOptions post={post} />}
		</StyledPostFirstRow>
	);
};

export default PostFirstRow;
