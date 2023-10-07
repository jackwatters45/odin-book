import { mdiSchool } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const CollegePlaceholder = () => {
	return <UserPropertyPlaceholder text={"No college to show"} icon={mdiSchool} />;
};

export default CollegePlaceholder;
