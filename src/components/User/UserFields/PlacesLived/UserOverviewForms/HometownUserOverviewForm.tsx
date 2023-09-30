import { PlaceLivedData } from "@/types/IUser";
import PlacesLivedUserOverviewForm from "./PlacesLivedUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface HometownUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PlaceLivedData | undefined;
}

const HometownUserOverviewForm = (props: HometownUserOverviewFormProps) => {
	return (
		<PlacesLivedUserOverviewForm
			category="hometown"
			labelText="Home"
			formType="hometown"
			includeTimePeriod={false}
			{...props}
		/>
	);
};

export default HometownUserOverviewForm;
