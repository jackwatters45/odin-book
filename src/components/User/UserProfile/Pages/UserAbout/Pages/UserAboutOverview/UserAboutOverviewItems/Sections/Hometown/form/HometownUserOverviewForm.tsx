import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm";

import useHometownUserOverviewForm from "./useHometownUserOverviewForm";
import { PlaceLivedData } from "@/types/IUser";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";

interface HometownUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PlaceLivedData | undefined;
}

const HometownUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: HometownUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useHometownUserOverviewForm({ audience, initialValues, handleCloseForm });

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
				category={"hometown.city"}
				isSelectedValue={!!formValues.values?.city}
				register={{ ...register("values.city"), required: true }}
				labelText="Home city"
			/>
			<AboutOverviewTextInput
				category={"hometown.state"}
				isSelectedValue={!!formValues.values?.state}
				register={{ ...register("values.state"), required: true }}
				labelText="Home state"
			/>
			<AboutOverviewTextInput
				category={"hometown.country"}
				isSelectedValue={!!formValues.values?.country}
				register={{ ...register("values.country"), required: true }}
				labelText="Home country"
			/>
		</StandardUserOverviewForm>
	);
};

export default HometownUserOverviewForm;
