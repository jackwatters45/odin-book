import UserNavLink from "@/components/User/Shared/UserNavLink";
import { StyledProfileSectionNav } from "@/styles/SharedStyles";
import { Dispatch, SetStateAction } from "react";

interface UserFriendsNavLinksProps {
	isUsingLink: boolean;
	setSelectedTab: Dispatch<SetStateAction<string>>;
	activeTabSelector: string;
}

const UserFriendsNav = (props: UserFriendsNavLinksProps) => {
	return (
		<StyledProfileSectionNav>
			<UserNavLink value="all" text="All friends" {...props} />
			<UserNavLink value="mutual" text="Mutual friends" {...props} />
			<UserNavLink value="college" text="College" {...props} />
			<UserNavLink value="current-city" text="Current city" {...props} />
			<UserNavLink value="hometown" text="Hometown" {...props} />
		</StyledProfileSectionNav>
	);
};

export default UserFriendsNav;
