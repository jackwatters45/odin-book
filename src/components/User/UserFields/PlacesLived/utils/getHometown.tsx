import { IPlaceLived } from "@/types/IUser";

const getHometown = (placesLived: IPlaceLived[] | undefined) =>
	placesLived?.find((place) => place.type === "hometown");

export default getHometown;
