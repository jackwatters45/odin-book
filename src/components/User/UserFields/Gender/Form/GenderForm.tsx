import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../Shared/StandardUserOverviewForm";
import useGenderForm from "./useGenderForm";
import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import { Gender } from "../types/GenderTypes";

interface GenderFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: Gender | undefined;
}

const GenderForm = ({ audience, handleCloseForm, initialValues }: GenderFormProps) => {
	const {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isOther,
	} = useGenderForm({
		audience,
		initialValues,
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
				id="gender"
				register={{ ...register("values.defaultType"), required: true }}
				options={[
					<option value="" key="default">
						Gender
					</option>,
					<option value="Female" key="female">
						Female
					</option>,
					<option value="Male" key="male">
						Male
					</option>,
					<option value="Nonbinary" key="nonbinary">
						Nonbinary
					</option>,
					<option value="Other" key="other">
						More options
					</option>,
				]}
			/>
			{isOther && (
				<AboutOverviewTextInput
					category="otherGender"
					isSelectedValue={!!formValues.values?.other}
					register={{ ...register("values.other"), required: true }}
					labelText="Gender"
				/>
			)}
		</StandardUserOverviewForm>
	);
};

export default GenderForm;
