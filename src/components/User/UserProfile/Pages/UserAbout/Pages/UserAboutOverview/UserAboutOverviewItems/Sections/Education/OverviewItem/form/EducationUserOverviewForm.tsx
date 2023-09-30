import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { EducationData } from "@/types/IUser";
import StandardUserOverviewForm from "../../../../../../../../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import { StyledUserAboutFormText } from "@/styles/SharedStyles";
import {
	StyledAttenderForContainer,
	StyledEducationTimePeriod,
} from "./EducationUserOverviewForm.styles";
import useEducationUserOverviewForm from "./useEducationUserOverviewForm";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import AboutOverviewTextArea from "@/components/Shared/FormComponents/TextArea/AboutOverviewTextArea";
import AboutOverviewRadioInput from "@/components/Shared/FormComponents/RadioInput/AboutOverviewRadioInput";

interface EducationUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: EducationData | undefined;
	handleCloseForm: () => void;
	formType: EducationData["type"];
}

const EducationUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
	formType,
}: EducationUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useEducationUserOverviewForm({
			audience,
			initialValues,
			handleCloseForm,
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
				category={"school"}
				isSelectedValue={!!formValues.values?.school}
				register={{ ...register("values.school"), required: true }}
				labelText="School"
			/>
			<StyledEducationTimePeriod
				checkboxText="Graduated"
				checked={formValues.values?.graduated}
				includeEndDateIfChecked={true}
				numFutureDates={4}
				selectedValues={{
					startYear: formValues.values?.startYear,
					startMonth: formValues.values?.startMonth,
					endYear: formValues.values?.endYear,
					endMonth: formValues.values?.endMonth,
				}}
				inputs={{
					checked: register("values.graduated"),
					startYear: register("values.startYear"),
					startMonth: register("values.startMonth"),
					startDay: register("values.startDay"),
					endYear: register("values.endYear"),
					endMonth: register("values.endMonth"),
					endDay: register("values.endDay"),
				}}
			/>
			<AboutOverviewTextArea
				category={"description"}
				isSelectedValue={!!formValues.values?.description}
				register={{ ...register("values.description") }}
				labelText="Description"
			/>
			{formType === "college" && (
				<>
					<div>
						<StyledUserAboutFormText>Concentrations</StyledUserAboutFormText>
						<AboutOverviewTextInput
							category={"concentrations1"}
							isSelectedValue={!!formValues.values?.concentrations1}
							register={{ ...register("values.concentrations1") }}
							labelText="Concentration"
						/>
						<AboutOverviewTextInput
							category={"concentrations2"}
							isSelectedValue={!!formValues.values?.concentrations2}
							register={{ ...register("values.concentrations2") }}
							labelText="Concentration"
						/>
						<AboutOverviewTextInput
							category={"concentrations3"}
							isSelectedValue={!!formValues.values?.concentrations3}
							register={{ ...register("values.concentrations3") }}
							labelText="Concentration"
						/>
					</div>
					<StyledAttenderForContainer>
						<StyledUserAboutFormText>Attended for</StyledUserAboutFormText>
						<AboutOverviewRadioInput
							formField="attendedFor"
							register={{ ...register("values.attendedFor") }}
							selectedValue={formValues.values?.attendedFor}
							options={[
								{ title: "College", value: "undergraduate" },
								{ title: "Graduate School", value: "graduate school" },
							]}
						/>
					</StyledAttenderForContainer>
					<AboutOverviewTextInput
						category={"degree"}
						isSelectedValue={!!formValues.values?.degree}
						register={{ ...register("values.degree") }}
						labelText="Degree"
					/>
				</>
			)}
		</StandardUserOverviewForm>
	);
};

export default EducationUserOverviewForm;
