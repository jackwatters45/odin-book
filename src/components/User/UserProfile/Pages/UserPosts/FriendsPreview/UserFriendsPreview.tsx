import UserProfileSectionWithLink from "@/components/User/Shared/UserProfileSection/UserProfileSectionWithLink";
import FriendsPreview from "@/components/User/UserFields/Friends/Preview/FriendsPreview";
import useFetchFriends from "@/components/User/UserFields/Friends/useFetchFriends";

const UserFriendsPreview = () => {
	const { userId, friends } = useFetchFriends();

	return (
		<UserProfileSectionWithLink
			title="Friends"
			seeAllLink={{
				to: `/user/${userId}/friends`,
				text: "See all friends",
			}}
		>
			<FriendsPreview friends={friends} />
		</UserProfileSectionWithLink>
	);
};

export default UserFriendsPreview;
