import PlacesLivedUserOverviewForm from "../../Form";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IPlaceLived } from "../../types/PlacesLivedTypes";

interface HometownFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IPlaceLived | undefined;
}

const HometownForm = (props: HometownFormProps) => {
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

export default HometownForm;
