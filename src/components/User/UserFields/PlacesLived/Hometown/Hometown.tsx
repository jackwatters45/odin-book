import HometownUserOverviewForm from "./Form/HometownForm";
import AboutOverviewPlacesLived from "../PlacesLived";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IPlaceLived } from "../types/PlacesLivedTypes";
import { mdiMapMarker } from "@mdi/js";
import HometownPlaceholder from "./Placeholder/HometownPlaceholder";

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
			icon={mdiMapMarker}
			titlePrefix={includePrefix ? "From " : undefined}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={HometownUserOverviewForm}
			PlaceholderComponent={<HometownPlaceholder />}
		/>
	);
};

export default Hometown;
