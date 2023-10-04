import AboutOverviewPlacesLived from "../PlacesLived";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import CurrentCityUserOverviewForm from "./Form/CurrentCityForm";
import { IPlaceLived } from "../types/PlacesLivedTypes";

interface AboutOverviewCurrentCityProps {
	currentCity: IPlaceLived | undefined;
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
