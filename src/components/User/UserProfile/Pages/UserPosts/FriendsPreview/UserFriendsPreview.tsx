import UserProfileSectionWithLink from "@/components/User/Shared/UserProfileSection/UserProfileSectionWithLink";
import FriendsPreview from "@/components/Friends/Components/Preview/FriendsPreview";
import useFetchFriends from "@/components/Friends/hooks/useFetchFriends";

const UserFriendsPreview = () => {
	const { userId, friends } = useFetchFriends({ limit: 9 });

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
