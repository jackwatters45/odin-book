import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import { StyledProfileLink } from "../../ProfileNav/ProfileNav.styles";
import FriendsList from "@/components/User/UserFields/Friends/FriendsList";
import useUserFriends from "./useUserFriends";
import { StyledProfileSectionNav } from "@/styles/SharedStyles";

const UserFriends = () => {
	const { filteredFriends, friendType } = useUserFriends();

	return (
		<UserProfileSection title="Friends">
			<StyledProfileSectionNav>
				<StyledProfileLink
					isActive={friendType === "ALL"}
					to={"all"}
					text="All friends"
				/>
				<StyledProfileLink
					to={"mutual"}
					text="Mutual Friends"
					isActive={friendType === "MUTUAL"}
				/>
				<StyledProfileLink
					to={"college"}
					text="College"
					isActive={friendType === "COLLEGE"}
				/>
				<StyledProfileLink
					to={"current-city"}
					text="Current city"
					isActive={friendType === "CURRENT_CITY"}
				/>
				<StyledProfileLink
					to={"hometown"}
					text="Hometown"
					isActive={friendType === "HOMETOWN"}
				/>
			</StyledProfileSectionNav>
			<FriendsList friends={filteredFriends} />
		</UserProfileSection>
	);
};

export default UserFriends;
