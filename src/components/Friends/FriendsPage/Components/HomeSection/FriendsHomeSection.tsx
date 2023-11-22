import { ReactNode } from "react";

import FriendsHomeSectionHeader, {
	FriendsHomeSectionHeaderProps,
} from "./Header/FriendsHomeSectionHeader";
import FriendCards from "@/components/Friends/FriendsPage/Components/HomeSection/Cards";
import { FriendCardsProps } from "@/components/Friends/FriendsPage/Components/HomeSection/Cards/FriendCards";
import { StyledHomeSectionContainer } from "./FriendsHomeSection.styles";
import Loading from "@/components/Shared/Loading";

interface FriendsHomeSectionProps
	extends FriendsHomeSectionHeaderProps,
		FriendCardsProps {
	children?: ReactNode;
	isLoading?: boolean;
}

const FriendsHomeSection = ({
	title,
	link,
	users,
	children,
	isLoading,
}: FriendsHomeSectionProps) => {
	return (
		<StyledHomeSectionContainer>
			<FriendsHomeSectionHeader title={title} link={link} />
			<div style={{ position: "relative", minHeight: "100px" }}>
				<FriendCards users={users} />
				{isLoading && (
					<div
						style={{
							position: "relative",
							height: "50px",
						}}
					>
						<Loading />
					</div>
				)}
				{children}
			</div>
		</StyledHomeSectionContainer>
	);
};

export default FriendsHomeSection;
