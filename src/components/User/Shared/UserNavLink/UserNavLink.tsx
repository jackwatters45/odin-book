import { Dispatch, SetStateAction } from "react";
import { StyledProfileLink } from "../../UserProfile/ProfileNav/ProfileNav.styles";

interface UserNavLinkProps {
	isUsingLink: boolean;
	setSelectedTab: Dispatch<SetStateAction<string>>;
	value: string;
	text: string;
	activeTabSelector: string;
}

const UserNavLink = ({
	value,
	text,
	isUsingLink,
	setSelectedTab,
	activeTabSelector,
}: UserNavLinkProps) => {
	return (
		<StyledProfileLink
			to={value}
			text={text}
			isActive={activeTabSelector === value}
			onClick={
				!isUsingLink
					? (e) => {
							e.preventDefault();
							setSelectedTab(value);
					  }
					: undefined
			}
		/>
	);
};

export default UserNavLink;
