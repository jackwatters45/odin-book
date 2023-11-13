import { ImageCircle } from "@/components/Nav/Nav.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { UserPreview } from "@/types/IPost";
import { Link } from "react-router-dom";

interface PostAuthorAvatarProps {
	author: UserPreview;
}

const PostAuthorAvatar = ({ author }: PostAuthorAvatarProps) => (
	<span>
		<Link to={`/user/${author?._id}`}>
			<ImageCircle
				src={author?.avatarUrl || defaultUserAvatar}
				alt={`${author?.fullName} avatar`}
			/>
		</Link>
	</span>
);

export default PostAuthorAvatar;
