import { IPlaceLived } from "@/types/IUser";

const getCurrentCity = (
	placesLived: IPlaceLived[] | undefined,
): IPlaceLived | undefined => {
	return placesLived?.find((place) => place.type === "current");
};

export default getCurrentCity;
