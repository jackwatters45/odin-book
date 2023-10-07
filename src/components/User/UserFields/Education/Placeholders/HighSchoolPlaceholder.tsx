import { mdiSchool } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const HighSchoolPlaceholder = () => {
	return <UserPropertyPlaceholder text={"No high school to show"} icon={mdiSchool} />;
};

export default HighSchoolPlaceholder;
