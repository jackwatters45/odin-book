import { PlaceLivedData } from "@/types/IUser";
import getHometown from "../../../PlacesLived/getHometown";
import getCurrentCity from "../../../PlacesLived/getCurrentCity";
import formatDateMonthYear from "@/utils/formatDateMonthYear";

interface UseDetailsDisplayContentProps {
	joined: string;
	placesLived: PlaceLivedData[] | undefined;
}

const useDetailsDisplayContent = ({
	joined,
	placesLived,
}: UseDetailsDisplayContentProps) => {
	const formattedJoined = formatDateMonthYear(joined);

	const hometown = getHometown(placesLived);
	const currentCity = getCurrentCity(placesLived);

	return {
		formattedJoined,
		hometown,
		currentCity,
	};
};

export default useDetailsDisplayContent;
