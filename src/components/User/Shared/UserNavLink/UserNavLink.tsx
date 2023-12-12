import { Dispatch, SetStateAction } from "react";
import { StyledProfileLink } from "../../UserProfile/ProfileNav/ProfileNav.styles";

interface UserNavLinkProps<T> {
	isUsingLink: boolean;
	setSelectedTab: Dispatch<SetStateAction<T>>;
	value: T & string;
	text: string;
	activeTabSelector: string;
}

const UserNavLink = <T,>({
	value,
	text,
	isUsingLink,
	setSelectedTab,
	activeTabSelector,
}: UserNavLinkProps<T>) => {
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
