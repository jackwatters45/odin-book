import { Link } from "react-router-dom";
import defaultUserAvatar from "../../Avatar/utils/defaultUserAvatar";
import { StyledFriend, StyledFriendsContainer } from "./FriendsPreview.styles";
import { IFriendsDisplay } from "../types/FriendsTypes";

export interface FriendsPreviewProps {
	friends: IFriendsDisplay | undefined;
	className?: string;
}

const FriendsPreview = ({ friends, className }: FriendsPreviewProps) => {
	return (
		<StyledFriendsContainer className={className}>
			{friends?.slice(0, 9).map(({ avatarUrl, id, fullName }) => (
				<StyledFriend key={id}>
					<Link to={`/user/${id}`}>
						<img src={avatarUrl || defaultUserAvatar} alt={"User friend"} />
						<span>{fullName}</span>
					</Link>
				</StyledFriend>
			))}
		</StyledFriendsContainer>
	);
};

export default FriendsPreview;
