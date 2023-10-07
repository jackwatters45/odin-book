import { mdiHome } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const CurrentCityPlaceholder = () => {
	return <UserPropertyPlaceholder text="No current city to show" icon={mdiHome} />;
};

export default CurrentCityPlaceholder;
