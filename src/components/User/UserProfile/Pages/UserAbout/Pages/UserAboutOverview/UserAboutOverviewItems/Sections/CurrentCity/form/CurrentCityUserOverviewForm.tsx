import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm";

import useCurrentCityUserOverviewForm from "./useCurrentCityUserOverviewForm";
import { PlaceLivedData } from "@/types/IUser";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";

interface CurrentCityUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PlaceLivedData | undefined;
}

const CurrentCityUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: CurrentCityUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useCurrentCityUserOverviewForm({ audience, initialValues, handleCloseForm });

	return (
		<StandardUserOverviewForm
			handleCloseForm={handleCloseForm}
			audience={audience}
			initial={defaultValues}
			formValues={formValues}
			handleSave={handleSubmit}
			control={control}
			setValue={setValue}
		>
			<AboutOverviewTextInput
				category={"currentCity.city"}
				isSelectedValue={!!formValues.values?.city}
				register={{ ...register("values.city"), required: true }}
				labelText="Current city"
			/>
			<AboutOverviewTextInput
				category={"currentCity.state"}
				isSelectedValue={!!formValues.values?.state}
				register={{ ...register("values.state"), required: true }}
				labelText="Current state"
			/>
			<AboutOverviewTextInput
				category={"currentCity.country"}
				isSelectedValue={!!formValues.values?.country}
				register={{ ...register("values.country"), required: true }}
				labelText="Current country"
			/>
		</StandardUserOverviewForm>
	);
};

export default CurrentCityUserOverviewForm;
