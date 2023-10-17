import { mdiAccount } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const GenderPlaceholder = () => {
	return <UserPropertyPlaceholder icon={mdiAccount} text="No gender number to show" />;
};

export default GenderPlaceholder;
