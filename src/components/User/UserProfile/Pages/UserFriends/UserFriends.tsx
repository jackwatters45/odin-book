import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import FriendsList from "@/components/User/UserFields/Friends/FriendsList";
import useUserFriends from "./useUserFriends";
import UserFriendsNav from "./UserFriendsNav";
import UserPhotos from "../UserPhotos";

interface UserFriendsProps {
	isUsingLink?: boolean;
}

const UserFriends = ({ isUsingLink = true }: UserFriendsProps) => {
	const { filteredFriends, setSelectedTab, activeTabSelector } = useUserFriends({
		isUsingLink,
	});

	return (
		<>
			<UserProfileSection title="Friends">
				<UserFriendsNav
					isUsingLink={isUsingLink}
					setSelectedTab={setSelectedTab}
					activeTabSelector={activeTabSelector}
				/>
				<FriendsList friends={filteredFriends} />
			</UserProfileSection>
			<UserPhotos isUsingLink={false} />
		</>
	);
};

export default UserFriends;
