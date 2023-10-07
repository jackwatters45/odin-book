import { mdiLink } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder/UserPropertyPlaceholder";

const SocialLinksPlaceholder = () => {
	return <UserPropertyPlaceholder text="No social links to show" icon={mdiLink} />;
};

export default SocialLinksPlaceholder;
