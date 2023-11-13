import { FriendPreview } from "@/components/Friends/types/FriendsTypes";
import FriendsHomeSection from "../SectionComponent/FriendsHomeSection";

// TODO: add addmore -> 12 per page
const FriendsHomeRequests = () => {
	const FRIENDS: FriendPreview[] = [];

	return (
		<FriendsHomeSection
			title="Friend Requests"
			link="/friends/requests"
			users={FRIENDS}
		/>
	);
};

export default FriendsHomeRequests;
