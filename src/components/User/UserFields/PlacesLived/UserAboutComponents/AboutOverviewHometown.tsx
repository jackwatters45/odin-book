import { PlaceLivedData } from "@/types/IUser";
import HometownUserOverviewForm from "../UserOverviewForms/HometownUserOverviewForm";
import AboutOverviewPlacesLived from "./AboutOverviewPlacesLived";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface AboutOverviewHometownProps {
	hometown: PlaceLivedData | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	includePrefix?: boolean;
}

const AboutOverviewHometown = ({
	hometown,
	audience,
	includeAddDetailLink = true,
	includePrefix = true,
}: AboutOverviewHometownProps) => {
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

export default AboutOverviewHometown;
