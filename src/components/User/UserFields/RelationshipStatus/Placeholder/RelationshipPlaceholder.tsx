import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";
import { mdiHeart } from "@mdi/js";

const RelationshipPlaceholder = () => {
	return <UserPropertyPlaceholder text="No relationship info to show" icon={mdiHeart} />;
};

export default RelationshipPlaceholder;
