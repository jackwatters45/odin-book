import { ImageCircle } from "@/components/Nav/Nav.styles";
import useFriendCard from "../HomeSection/Cards/Card/useFriendCard";
import { FriendPreview } from "../../../types/FriendsTypes";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";

import StandardButton from "@/components/Shared/StandardButton";
import {
	StyledNavFriendCardButtonContainer,
	StyledNavFriendCardLink,
	StyledNavFriendCardMutualFriends,
	StyledNavFriendCardTextContent,
	StyledNavFriendCardUserName,
} from "./NavFriendCard.styles";
import { MouseEvent } from "react";

interface NavFriendCardProps {
	user: FriendPreview;
	to: "all" | "requests" | "suggestions";
}

const NavFriendCard = ({
	user: { _id, avatarUrl, fullName, mutualFriends },
	to,
}: NavFriendCardProps) => {
	const { buttonOptions } = useFriendCard(_id);

	return (
		<StyledNavFriendCardLink to={`/friends/${to}/${_id}`}>
			<ImageCircle src={avatarUrl || defaultUserAvatar} size={60} />
			<StyledNavFriendCardTextContent>
				<div>
					<StyledNavFriendCardUserName>{fullName}</StyledNavFriendCardUserName>
					<StyledNavFriendCardMutualFriends mutualFriends={mutualFriends} />
				</div>
				<StyledNavFriendCardButtonContainer>
					{buttonOptions.map((options) => (
						<StandardButton
							key={options.text}
							{...options}
							onClick={(e: MouseEvent<HTMLElement>) => {
								e.preventDefault();
								if (options.onClick) options.onClick();
							}}
						/>
					))}
				</StyledNavFriendCardButtonContainer>
			</StyledNavFriendCardTextContent>
		</StyledNavFriendCardLink>
	);
};

export default NavFriendCard;
