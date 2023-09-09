import { PlaceLivedData } from "@/types/IUser";

const getCurrentCity = (
	placesLived: PlaceLivedData[] | undefined,
): PlaceLivedData | undefined => {
	return placesLived?.find((place) => place.type === "current");
};

export default getCurrentCity;
