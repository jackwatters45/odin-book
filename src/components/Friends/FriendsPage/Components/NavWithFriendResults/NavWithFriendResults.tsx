import { ReactNode } from "react";
import { FriendPreview } from "../../../types/FriendsTypes";
import {
	StyledFriendsNavPadding,
	StyledNavHeaderH2,
} from "../../Pages/Home/Nav/FriendsHomeNav.styles";
import Icon from "@mdi/react";
import { mdiArrowLeftThin } from "@mdi/js";
import {
	StyledBackLink,
	StyledLoadingPosition,
	StyledNavFriendsCardContainer,
	StyledNavFriendsHeader,
	StyledNavFriendsLink,
	StyledNoResultsText,
} from "./NavWithFriendResults.styles";
import NavFriendCard from "../NavFriendCard";
import Loading from "@/components/Shared/Loading";

interface NavWithFriendResultsProps {
	title: string;
	users: FriendPreview[] | undefined;
	children?: ReactNode;
	to: "all" | "requests" | "suggestions";
	scrollLoader?: ReactNode;
	isLoading?: boolean;
	noResultsText?: string;
}

const NavWithFriendResults = ({
	title,
	users,
	children,
	to,
	scrollLoader,
	isLoading,
	noResultsText,
}: NavWithFriendResultsProps) => {
	return (
		<StyledFriendsNavPadding>
			<StyledNavFriendsHeader>
				<StyledBackLink to="/friends/">
					<Icon path={mdiArrowLeftThin} size={1.2} />
				</StyledBackLink>
				<div>
					<StyledNavFriendsLink to="/friends/">Friends</StyledNavFriendsLink>
					<StyledNavHeaderH2>{title}</StyledNavHeaderH2>
				</div>
			</StyledNavFriendsHeader>
			{children}
			<StyledNavFriendsCardContainer>
				{isLoading ? (
					<StyledLoadingPosition>
						<Loading />
					</StyledLoadingPosition>
				) : !users?.length && noResultsText ? (
					<StyledNoResultsText>{noResultsText}</StyledNoResultsText>
				) : (
					users?.map((user) => <NavFriendCard key={user._id} user={user} to={to} />)
				)}
				{scrollLoader}
			</StyledNavFriendsCardContainer>
		</StyledFriendsNavPadding>
	);
};

export default NavWithFriendResults;
