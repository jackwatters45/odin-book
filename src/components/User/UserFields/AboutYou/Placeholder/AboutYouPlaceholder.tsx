import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";
import { mdiAccountSupervisorCircle } from "@mdi/js";

const AboutYouPlaceholder = () => {
	return (
		<UserPropertyPlaceholder
			text={"No details to show"}
			icon={mdiAccountSupervisorCircle}
		/>
	);
};

export default AboutYouPlaceholder;
