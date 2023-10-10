import StandardUserOverviewForm from "@/components/User/Shared/UserForm";
import useUserForm from "@/components/User/Shared/UserForm/useUserForm";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { OtherName, otherNameTypeOptions } from "../types/OtherNamesTypes";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
import { StyledStandardCheckbox } from "./OtherNamesForm.styles";

interface OtherNamesFormProps {
	audience: AudienceStatusOptions;
	initialValues: OtherName | undefined;
	handleCloseForm: () => void;
}

const OtherNamesForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: OtherNamesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<OtherName>({
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
			<StandardTextInput
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

export default OtherNamesForm;
