import UserProfileSection from "@/components/User/Shared/UserProfileSection";
import FriendsList from "@/components/Friends/Components/FriendsList";
import useUserFriends from "./useUserFriends";
import UserFriendsNav from "./UserFriendsNav";
import UserPhotos from "../UserPhotos";
import { InfiniteScrollLoadingRelative } from "@/styles/SharedStyles";

interface UserFriendsProps {
	isUsingLink?: boolean;
}

const UserFriends = ({ isUsingLink = true }: UserFriendsProps) => {
	const { friends, setSelectedTab, activeTabSelector, ...rest } = useUserFriends({
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
				<FriendsList friends={friends} />
				<InfiniteScrollLoadingRelative {...rest} />
			</UserProfileSection>
			<UserPhotos isUsingLink={false} />
		</>
	);
};

export default UserFriends;
