import { mdiEmailFastOutline } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const EmailPlaceholder = () => {
	return <UserPropertyPlaceholder text={"No email to show"} icon={mdiEmailFastOutline} />;
};

export default EmailPlaceholder;
