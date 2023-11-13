import { Link } from "react-router-dom";

import { StyledFriendsHomeSectionHeader } from "./FriendsHomeSectionHeader.styles";

export interface FriendsHomeSectionHeaderProps {
	title: string;
	link: string;
}

const FriendsHomeSectionHeader = ({ title, link }: FriendsHomeSectionHeaderProps) => {
	return (
		<StyledFriendsHomeSectionHeader>
			<h3>{title}</h3>
			<Link to={link}>See All</Link>
		</StyledFriendsHomeSectionHeader>
	);
};

export default FriendsHomeSectionHeader;
