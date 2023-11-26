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
import useNavWithUserResults from "./useNavWithUserResults";

interface NavWithUserResultsProps {
	title: string;
	users: UserPreviewWithMutuals[] | undefined;
	to: "all" | "requests" | "suggestions";
	children?: ReactNode;
	scrollLoader?: ReactNode;
	isLoading?: boolean;
	noResultsText?: string;
}

const NavWithUserResults = ({
	title,
	users,
	to,
	children,
	scrollLoader,
	isLoading,
	noResultsText,
}: NavWithUserResultsProps) => {
	const { isPreview } = useNavWithUserResults();

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
			<StyledNavUserCardContainer $isPreview={isPreview}>
				{isLoading ? (
					<StyledLoadingPosition>
						<Loading />
					</StyledLoadingPosition>
				) : !users?.length && noResultsText ? (
					<StyledNoResultsText>{noResultsText}</StyledNoResultsText>
				) : (
					users?.map((user) => (
						<NavFriendCard key={user._id} user={user} to={to} isPreview={isPreview} />
					))
				)}
				{scrollLoader}
			</StyledNavUserCardContainer>
		</StyledUserNavPadding>
	);
};

export default NavWithUserResults;
