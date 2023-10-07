import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";
import { mdiBriefcase } from "@mdi/js";

const WorkPlaceholder = () => {
	return <UserPropertyPlaceholder text={"No workplaces to show"} icon={mdiBriefcase} />;
};

export default WorkPlaceholder;
