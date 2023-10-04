import HometownUserOverviewForm from "./Form/HometownForm";
import AboutOverviewPlacesLived from "../PlacesLived";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IPlaceLived } from "../types/PlacesLivedTypes";

interface HometownProps {
	hometown: IPlaceLived | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	includePrefix?: boolean;
}

const Hometown = ({
	hometown,
	audience,
	includeAddDetailLink = true,
	includePrefix = true,
}: HometownProps) => {
	return (
		<AboutOverviewPlacesLived
			placeLived={hometown}
			audience={audience}
			category="hometown"
			subtitle="Hometown"
			titlePrefix={includePrefix ? "From " : undefined}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={HometownUserOverviewForm}
		/>
	);
};

export default Hometown;
