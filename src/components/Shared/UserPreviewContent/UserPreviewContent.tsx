import { useParams } from "react-router";

import FriendsPlaceholder from "./Placeholder/UserPreviewPlaceholder";
import UserProfile from "@/components/User/UserProfile";

const UserPreviewContent = () => {
	const { id } = useParams<{ id: string }>() as { id: string };

	return id ? <UserProfile /> : <FriendsPlaceholder />;
};

export default UserPreviewContent;
