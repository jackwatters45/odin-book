import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../Shared/UserForm";
import usePronounsForm from "./usePronounsForm";
import { Pronouns, PronounsType } from "../types/PronounsTypes";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";

interface PronounsFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PronounsType | undefined;
}

const PronounsForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: PronounsFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		usePronounsForm({
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
				id="pronouns"
				register={{ ...register("values"), required: true }}
				options={[
					<option value="" key="default">
						Pronouns
					</option>,
					...Pronouns.map((pronoun) => (
						<option value={pronoun} key={pronoun}>
							{pronoun}
						</option>
					)),
				]}
			/>
		</StandardUserOverviewForm>
	);
};

export default PronounsForm;
