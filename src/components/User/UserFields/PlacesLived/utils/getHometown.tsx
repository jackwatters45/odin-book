import { IPlaceLived } from "../types/PlacesLivedTypes";

const getHometown = (placesLived: IPlaceLived[] | undefined) =>
	placesLived?.find((place) => place.type === "hometown");

export default getHometown;
