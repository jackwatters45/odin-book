import { HTMLAttributes, ReactNode } from "react";

import { StyledFriendsContainer, StyledFriendsContent } from "./Friends.styles";
import { StyledNavShadowY } from "@/styles/SharedStyles";
import useWindowWidth from "@/hooks/dom/useWindowWidth";

interface FriendsProps extends HTMLAttributes<HTMLDivElement> {
	Nav: ReactNode;
	Content: ReactNode;
}

const Friends = ({ Nav, Content, ...props }: FriendsProps) => {
	const windowWidth = useWindowWidth();

	return windowWidth >= 768 ? (
		<StyledFriendsContainer {...props}>
			{Nav}
			<StyledNavShadowY $left={360} />
			<StyledFriendsContent>{Content}</StyledFriendsContent>
		</StyledFriendsContainer>
	) : (
		<StyledFriendsContainer {...props}>{Nav}</StyledFriendsContainer>
	);
};

export default Friends;
