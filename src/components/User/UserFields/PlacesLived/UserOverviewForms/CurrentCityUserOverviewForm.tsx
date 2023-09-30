import { PlaceLivedData } from "@/types/IUser";
import PlacesLivedUserOverviewForm from "./PlacesLivedUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface CurrentCityUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PlaceLivedData | undefined;
}

const CurrentCityUserOverviewForm = (props: CurrentCityUserOverviewFormProps) => {
	return (
		<PlacesLivedUserOverviewForm
			category="currentCity"
			labelText="Current"
			formType="current"
			includeTimePeriod={false}
			{...props}
		/>
	);
};

export default CurrentCityUserOverviewForm;
