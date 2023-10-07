import { mdiHumanMaleFemaleChild } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder/UserPropertyPlaceholder";

const FamilyMembersPlaceholder = () => {
	return (
		<UserPropertyPlaceholder
			text="No family members to show"
			icon={mdiHumanMaleFemaleChild}
		/>
	);
};

export default FamilyMembersPlaceholder;
