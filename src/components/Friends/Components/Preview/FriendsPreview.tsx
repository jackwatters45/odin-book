import { Link } from "react-router-dom";
import defaultUserAvatar from "../../../User/UserFields/Avatar/utils/defaultUserAvatar";
import { StyledFriend, StyledFriendsContainer } from "./FriendsPreview.styles";
import useContainerWidth from "@/components/User/UserProfile/context/useContainerWidth";
import { UserPreview } from "@/types/IPost";

export interface FriendsPreviewProps {
	friends: UserPreview[] | undefined;
	className?: string;
}

const FriendsPreview = ({ friends, className }: FriendsPreviewProps) => {
	const containerWidth = useContainerWidth();

	return (
		<StyledFriendsContainer className={className}>
			{friends?.slice(0, 9).map(({ avatarUrl, _id, fullName }) => (
				<StyledFriend key={_id} $containerWidth={containerWidth}>
					<Link to={`/user/${_id}`}>
						<img src={avatarUrl || defaultUserAvatar} alt={"User friend"} />
						<span>{fullName}</span>
					</Link>
				</StyledFriend>
			))}
		</StyledFriendsContainer>
	);
};

export default FriendsPreview;
