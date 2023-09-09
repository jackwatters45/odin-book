import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { mdiEarth, mdiLock, mdiAccountMultiple } from "@mdi/js";

interface UseAudienceStatusProps {
	value: AudienceStatusOptions;
}

const useAudienceStatus = ({ value }: UseAudienceStatusProps) => {
	const iconPath = (() => {
		if (value === "Public") {
			return mdiEarth;
		} else if (value === "Friends") {
			return mdiAccountMultiple;
		} else {
			return mdiLock;
		}
	})();

	return {
		iconPath,
	};
};

export default useAudienceStatus;
