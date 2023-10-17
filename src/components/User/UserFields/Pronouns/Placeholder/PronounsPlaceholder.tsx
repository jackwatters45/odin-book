import { mdiCommentAccount } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const PronounsPlaceholder = () => {
	return (
		<UserPropertyPlaceholder icon={mdiCommentAccount} text="No pronouns number to show" />
	);
};

export default PronounsPlaceholder;
