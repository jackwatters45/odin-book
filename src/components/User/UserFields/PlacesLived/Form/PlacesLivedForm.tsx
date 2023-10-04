import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import StandardUserOverviewForm from "../../../Shared/StandardUserOverviewForm";
import usePlacesLivedForm from "./usePlacesLivedForm";
import { StyledTimePeriodStartOnly } from "@/styles/SharedStyles";
import { IPlaceLived, PlaceLivedType } from "../types/PlacesLivedTypes";

interface PlacesLivedFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IPlaceLived | undefined;
	category: string;
	labelText?: string;
	url?: string;
	formType?: PlaceLivedType;
	includeTimePeriod?: boolean;
}

const PlacesLivedForm = ({
	audience,
	handleCloseForm,
	initialValues,
	category = "placesLived",
	labelText,
	url = "places-lived",
	formType = "default",
	includeTimePeriod = true,
}: PlacesLivedFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		usePlacesLivedForm({
			audience,
			initialValues,
			handleCloseForm,
			url,
			formType,
		});

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
				category={`${category}.city`}
				isSelectedValue={!!formValues.values?.city}
				register={{ ...register("values.city"), required: true }}
				labelText={labelText ? `${labelText} city` : "City"}
			/>
			<AboutOverviewTextInput
				category={`${category}.state`}
				isSelectedValue={!!formValues.values?.state}
				register={{ ...register("values.state"), required: true }}
				labelText={labelText ? `${labelText} state` : "State"}
			/>
			<AboutOverviewTextInput
				category={`${category}.country`}
				isSelectedValue={!!formValues.values?.country}
				register={{ ...register("values.country"), required: true }}
				labelText={labelText ? `${labelText} country` : "Country"}
			/>
			{includeTimePeriod && (
				<StyledTimePeriodStartOnly
					title="Date Moved"
					checked={undefined}
					selectedValues={{
						startYear: formValues.values?.startYear,
						startMonth: formValues.values?.startMonth,
					}}
					inputs={{
						startYear: register("values.startYear"),
						startMonth: register("values.startMonth"),
						startDay: register("values.startDay"),
					}}
				/>
			)}
		</StandardUserOverviewForm>
	);
};

export default PlacesLivedForm;
