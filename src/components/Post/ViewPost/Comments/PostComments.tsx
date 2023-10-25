import { IComment } from "@/types/IComment";

interface PostCommentsProps {
	comments: IComment[];
}
const PostComments = ({ comments }: PostCommentsProps) => {
	return <div>Comments here</div>;
};

export default PostComments;
