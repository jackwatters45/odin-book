import { IPlaceLived } from "../types/PlacesLivedTypes";

const getCurrentCity = (
	placesLived: IPlaceLived[] | undefined,
): IPlaceLived | undefined => {
	return placesLived?.find((place) => place.type === "current");
};

export default getCurrentCity;
