import { PlaceLivedData } from "@/types/IUser";
import getHometown from "../../../PlacesLived/utils/getHometown";
import getCurrentCity from "../../../PlacesLived/utils/getCurrentCity";
import formatDateMonthYear from "@/utils/dateHelpers/formatDateMonthYear";

interface UseDetailsDisplayContentProps {
	joined: string;
	placesLived: PlaceLivedData[] | undefined;
}

const useDetailsDisplayContent = ({
	joined,
	placesLived,
}: UseDetailsDisplayContentProps) => {
	const formattedJoined = `Joined ${formatDateMonthYear(joined)}`;

	const hometown = getHometown(placesLived);
	const currentCity = getCurrentCity(placesLived);

	return {
		formattedJoined,
		hometown,
		currentCity,
	};
};

export default useDetailsDisplayContent;
