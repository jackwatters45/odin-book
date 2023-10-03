import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useAboutPronounsForm from "./useAboutPronounsForm";
import { Pronouns, PronounsType } from "../types/PronounsTypes";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";

interface AboutPronounsFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: PronounsType | undefined;
}

const AboutPronounsForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutPronounsFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useAboutPronounsForm({
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

export default AboutPronounsForm;
