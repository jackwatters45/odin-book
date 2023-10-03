import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutDetails = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const aboutYou = user?.aboutYou;

	const namePronunciation = user?.namePronunciation;

	const otherNames = user?.otherNames;

	const favoriteQuotes = user?.favoriteQuotes;

	return {
		audienceSettings,
		aboutYou,
		namePronunciation,
		otherNames,
		favoriteQuotes,
	};
};

export default useUserAboutDetails;
