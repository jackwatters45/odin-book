import PlacesLivedUserOverviewForm from "../../Form";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IPlaceLived } from "../../types/PlacesLivedTypes";

interface CurrentCityFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IPlaceLived | undefined;
}

const CurrentCityForm = (props: CurrentCityFormProps) => {
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

export default CurrentCityForm;
