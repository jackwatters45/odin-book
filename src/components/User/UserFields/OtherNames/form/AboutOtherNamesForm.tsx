import StandardUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { OtherName, otherNameTypeOptions } from "../types/OtherNames";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import { StyledStandardCheckbox } from "./AboutOtherNamesForm.styles";

interface AboutOtherNamesFormProps {
	audience: AudienceStatusOptions;
	initialValues: OtherName | undefined;
	handleCloseForm: () => void;
}

const AboutOtherNamesForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: AboutOtherNamesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<OtherName>({
			audience,
			initialValues,
			url: "other-names",
			method: initialValues ? "PATCH" : "POST",
			param: initialValues?._id,
			handleCloseForm,
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
			<FullWidthStandardSelect
				id={`otherNames.type.${initialValues?._id}`}
				register={{ ...register("values.type"), required: true }}
				defaultValue={initialValues?.type || "Nickname"}
				options={[
					...otherNameTypeOptions.map((type) => (
						<option value={type} key={type}>
							{type}
						</option>
					)),
				]}
			/>
			<AboutOverviewTextInput
				category={`otherNames.name.${initialValues?._id}`}
				isSelectedValue={!!formValues.values?.name}
				register={{ ...register("values.name"), required: true }}
				labelText="Name"
			/>
			<StyledStandardCheckbox
				id={`otherNames.showAtTop.${initialValues?._id}`}
				register={{ ...register("values.showAtTop") }}
				labelText="Show at top of profile"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutOtherNamesForm;
