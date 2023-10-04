import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { mdiAccountMultiple, mdiEarth, mdiLock } from "@mdi/js";

const getAudienceIcon = (value: AudienceStatusOptions) => {
	if (value === "Public") {
		return mdiEarth;
	} else if (value === "Friends") {
		return mdiAccountMultiple;
	} else {
		return mdiLock;
	}
};

export default getAudienceIcon;
