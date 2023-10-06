import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../Shared/UserForm";
import { StyledUserAboutFormText } from "@/styles/SharedStyles";
import {
	StyledAttenderForContainer,
	StyledEducationTimePeriod,
} from "./EducationForm.styles";
import useEducationForm from "./useEducationForm";
import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import AboutOverviewTextArea from "@/components/Shared/TextArea/AboutOverviewTextArea";
import AboutOverviewRadioInput from "@/components/Shared/RadioInput/AboutOverviewRadioInput";
import { IEducation } from "../types/EducationTypes";

interface EducationFormProps {
	audience: AudienceStatusOptions;
	initialValues: IEducation | undefined;
	handleCloseForm: () => void;
	formType: IEducation["type"];
}

const EducationForm = ({
	audience,
	initialValues,
	handleCloseForm,
	formType,
}: EducationFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useEducationForm({
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

export default EducationForm;
