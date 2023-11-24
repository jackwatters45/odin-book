import { ReactNode } from "react";
import Icon from "@mdi/react";

import { mdiArrowLeftThin } from "@mdi/js";
import {
	StyledBackLink,
	StyledLoadingPosition,
	StyledNavHeaderH2,
	StyledNavUserCardContainer,
	StyledNavUserHeader,
	StyledNavUserLink,
	StyledNoResultsText,
	StyledUserNavPadding,
} from "./NavWithUserResults.styles";
import Loading from "@/components/Shared/Loading";

import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";
import NavFriendCard from "../../Friends/FriendsPage/Components/NavFriendCard";

interface NavWithUserResultsProps {
	title: string;
	users: UserPreviewWithMutuals[] | undefined;
	children?: ReactNode;
	to: "all" | "requests" | "suggestions";
	scrollLoader?: ReactNode;
	isLoading?: boolean;
	noResultsText?: string;
}

const NavWithUserResults = ({
	title,
	users,
	children,
	to,
	scrollLoader,
	isLoading,
	noResultsText,
}: NavWithUserResultsProps) => {
	return (
		<StyledUserNavPadding>
			<StyledNavUserHeader>
				<StyledBackLink to="/friends/">
					<Icon path={mdiArrowLeftThin} size={1.2} />
				</StyledBackLink>
				<div>
					<StyledNavUserLink to="/friends/">friends</StyledNavUserLink>
					<StyledNavHeaderH2>{title}</StyledNavHeaderH2>
				</div>
			</StyledNavUserHeader>
			{children}
			<StyledNavUserCardContainer>
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
			</StyledNavUserCardContainer>
		</StyledUserNavPadding>
	);
};

export default NavWithUserResults;
