import { mdiBriefcase, mdiHeadHeart, mdiHome, mdiMapMarker, mdiSchool } from "@mdi/js";

import UserDetail from "../UserDetail";

const EmptyDetailsDisplay = () => {
	return (
		<>
			<UserDetail icon={mdiHome} textComponent="Current city" />
			<UserDetail icon={mdiBriefcase} textComponent="Workplace" />
			<UserDetail icon={mdiSchool} textComponent="School" />
			<UserDetail icon={mdiMapMarker} textComponent="Hometown" />
			<UserDetail icon={mdiHeadHeart} textComponent="Relationship status" />
		</>
	);
};

export default EmptyDetailsDisplay;
