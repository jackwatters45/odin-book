import { useParams } from "react-router";

import FriendsPlaceholder from "../Placeholder/FriendsPlaceholder";
import UserProfile from "@/components/User/UserProfile";

const FriendsContentWithUsers = () => {
	const { id } = useParams<{ id: string }>() as { id: string };

	return id ? <UserProfile /> : <FriendsPlaceholder />;
};

export default FriendsContentWithUsers;
