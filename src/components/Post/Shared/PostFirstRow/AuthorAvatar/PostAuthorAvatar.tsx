import { ImageCircle } from "@/components/Nav/Nav.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";
import { UserPreview } from "@/types/IPost";
import { Link } from "react-router-dom";

interface PostAuthorAvatarProps {
	author: UserPreview;
}

const PostAuthorAvatar = ({ author }: PostAuthorAvatarProps) => {
	const { closeAllDialogs } = useDialogsContext();

	return (
		<span>
			<Link to={`/user/${author?._id}`} onClick={closeAllDialogs}>
				<ImageCircle
					src={author?.avatarUrl || defaultUserAvatar}
					alt={`${author?.fullName} avatar`}
				/>
			</Link>
		</span>
	);
};

export default PostAuthorAvatar;
