import { StyledProfileSectionNav } from "@/styles/SharedStyles";
import { Dispatch, SetStateAction } from "react";
import UserNavLink from "@/components/User/Shared/UserNavLink";

interface UserPhotosNavProps {
	isOwnProfile: boolean;
	userFirstName: string;
	isUsingLink: boolean;
	setSelectedTab: Dispatch<SetStateAction<string>>;
	activeTabSelector: string;
}

const UserPhotosNav = ({ isOwnProfile, userFirstName, ...props }: UserPhotosNavProps) => {
	return (
		<StyledProfileSectionNav>
			<UserNavLink
				value="of"
				text={`Photos of ${isOwnProfile ? "you" : `${userFirstName}`}`}
				{...props}
			/>
			<UserNavLink
				value="by"
				text={`${isOwnProfile ? "Your" : `${userFirstName}'s`} photos`}
				{...props}
			/>
		</StyledProfileSectionNav>
	);
};

export default UserPhotosNav;
