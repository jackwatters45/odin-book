import { mdiAccountVoice } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const NamePronunciationPlaceholder = () => {
	return (
		<UserPropertyPlaceholder
			text={"No name pronunciations to show"}
			icon={mdiAccountVoice}
		/>
	);
};

export default NamePronunciationPlaceholder;
