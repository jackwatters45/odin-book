import { ImageCircle } from "@/components/Nav/Nav.styles";
import useFriendCard from "../HomeSection/Cards/Card/useFriendCard";
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
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

interface NavFriendCardProps {
	user: UserPreviewWithMutuals;
	to: "all" | "requests" | "suggestions" | "search";
	isPreview: boolean;
}

const NavFriendCard = ({
	user: { _id, avatarUrl, fullName, mutualFriends, status },
	to,
	isPreview,
}: NavFriendCardProps) => {
	const { buttonOptions } = useFriendCard(_id, status);

	return (
		<StyledNavFriendCardLink to={isPreview ? `/friends/${to}/${_id}` : `/user/${_id}/`}>
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
