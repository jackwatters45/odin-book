import { PlaceLivedData } from "@/types/IUser";

const formatCity = (location: PlaceLivedData | undefined) =>
	`${location?.city}, ${location?.state}`;

export default formatCity;
