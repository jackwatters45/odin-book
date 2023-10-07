import { mdiAccountCircle } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder/UserPropertyPlaceholder";

const OtherNamesPlaceholder = () => {
	return (
		<UserPropertyPlaceholder text="No other names to show" icon={mdiAccountCircle} />
	);
};

export default OtherNamesPlaceholder;
