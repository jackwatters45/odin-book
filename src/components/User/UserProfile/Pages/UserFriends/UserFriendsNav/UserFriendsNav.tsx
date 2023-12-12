import { Dispatch, SetStateAction } from "react";

import { FriendsQueryEndType } from "@/components/Friends/types/FriendsTypes";
import UserNavLink from "@/components/User/Shared/UserNavLink";
import { StyledProfileSectionNav } from "@/styles/SharedStyles";
import useUserFriendsNav from "./useUserFriendsNav";

interface UserFriendsNavLinksProps {
	isUsingLink: boolean;
	setSelectedTab: Dispatch<SetStateAction<FriendsQueryEndType>>;
	activeTabSelector: string;
}

const UserFriendsNav = (props: UserFriendsNavLinksProps) => {
	const { showMutualFriends, showCollege, showCurrentCity, showHometown } =
		useUserFriendsNav();

	return (
		<StyledProfileSectionNav>
			<UserNavLink value="all" text="All friends" {...props} />
			{showMutualFriends && (
				<UserNavLink value="mutual" text="Mutual friends" {...props} />
			)}
			{showCollege && <UserNavLink value="college" text="College" {...props} />}
			{showCurrentCity && (
				<UserNavLink value="current-city" text="Current city" {...props} />
			)}
			{showHometown && <UserNavLink value="hometown" text="Hometown" {...props} />}
		</StyledProfileSectionNav>
	);
};

export default UserFriendsNav;
