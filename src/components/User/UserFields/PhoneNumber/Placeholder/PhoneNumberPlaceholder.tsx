import { mdiPhone } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const PhoneNumberPlaceholder = () => {
	return <UserPropertyPlaceholder icon={mdiPhone} text="No phone number to show" />;
};

export default PhoneNumberPlaceholder;
