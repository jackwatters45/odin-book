import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { Link } from "react-router-dom";
import { StyledFriendCardImage } from "./FriendCardImage.styles";

interface FriendCardImageProps {
	_id: string;
	avatarUrl: string | undefined;
}

const FriendCardImage = ({ _id, avatarUrl }: FriendCardImageProps) => (
	<Link to={`/user/${_id}`} style={{ lineHeight: 0 }}>
		<StyledFriendCardImage src={avatarUrl || defaultUserAvatar} alt="Friend avatar" />
	</Link>
);

export default FriendCardImage;
