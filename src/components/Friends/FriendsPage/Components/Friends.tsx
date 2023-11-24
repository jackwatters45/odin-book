import { HTMLAttributes, ReactNode } from "react";

import { StyledFriendsContainer, StyledFriendsContent } from "./Friends.styles";

interface FriendsProps extends HTMLAttributes<HTMLDivElement> {
	Nav: ReactNode;
	Content: ReactNode;
}

const Friends = ({ Nav, Content, ...props }: FriendsProps) => {
	return (
		<StyledFriendsContainer {...props}>
			{Nav}
			<StyledFriendsContent>{Content}</StyledFriendsContent>
		</StyledFriendsContainer>
	);
};

export default Friends;
