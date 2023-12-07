import { ImageCircle } from "@/components/Nav/Nav.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";
import { IComment } from "@/types/IComment";
import { Link } from "react-router-dom";

interface AuthorImageProps {
	author: IComment["author"];
}

const AuthorImage = ({ author }: AuthorImageProps) => {
	const { closeAllDialogs } = useDialogsContext();

	return (
		<Link to={`/user/${author._id}`} onClick={closeAllDialogs}>
			<ImageCircle
				src={author.avatarUrl || defaultUserAvatar}
				alt="profile picture"
				size={32}
			/>
		</Link>
	);
};

export default AuthorImage;
