import { PlaceLivedData } from "@/types/IUser";
import AboutOverviewPlacesLived from "./AboutOverviewPlacesLived";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import CurrentCityUserOverviewForm from "../UserOverviewForms/CurrentCityUserOverviewForm";

interface AboutOverviewCurrentCityProps {
	currentCity: PlaceLivedData | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	includePrefix?: boolean;
}

const AboutOverviewCurrentCity = ({
	currentCity,
	audience,
	includeAddDetailLink = true,
	includePrefix = true,
}: AboutOverviewCurrentCityProps) => {
	return (
		<AboutOverviewPlacesLived
			placeLived={currentCity}
			audience={audience}
			category="currentCity"
			categoryDisplayName="current city"
			subtitle="Current city"
			titlePrefix={includePrefix ? "Lives in " : undefined}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={CurrentCityUserOverviewForm}
		/>
	);
};

export default AboutOverviewCurrentCity;
