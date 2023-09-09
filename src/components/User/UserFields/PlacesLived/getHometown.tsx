import { PlaceLivedData } from "@/types/IUser";

const getHometown = (placesLived: PlaceLivedData[] | undefined) =>
	placesLived?.find((place) => place.type === "hometown");

export default getHometown;
