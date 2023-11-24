import { ReactNode } from "react";

import FriendsHomeSectionHeader, {
	FriendsHomeSectionHeaderProps,
} from "./Header/FriendsHomeSectionHeader";

import { StyledHomeSectionContainer } from "./FriendsHomeSection.styles";
import Loading from "@/components/Shared/Loading";
import FriendCards, { FriendCardsProps } from "./Cards/FriendCards";

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
	setItemsPerRow,
}: FriendsHomeSectionProps) => {
	return (
		<StyledHomeSectionContainer>
			<FriendsHomeSectionHeader title={title} link={link} />
			<div style={{ position: "relative", minHeight: "100px" }}>
				<FriendCards users={users} setItemsPerRow={setItemsPerRow} />
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
