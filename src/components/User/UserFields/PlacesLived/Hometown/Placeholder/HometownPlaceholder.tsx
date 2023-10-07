import { mdiMapMarker } from "@mdi/js";
import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const HometownPlaceholder = () => {
	return <UserPropertyPlaceholder text="No hometown to show" icon={mdiMapMarker} />;
};

export default HometownPlaceholder;
