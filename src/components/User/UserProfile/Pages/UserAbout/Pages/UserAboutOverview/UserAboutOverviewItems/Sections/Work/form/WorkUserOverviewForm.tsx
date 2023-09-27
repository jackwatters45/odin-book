import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm";
import useWorkUserOverviewForm from "./useWorkUserOverviewForm";
import { WorkData } from "@/types/IUser";
import TimePeriod from "@/components/Shared/FormComponents/TimePeriod";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import AboutOverviewTextArea from "@/components/Shared/FormComponents/TextArea/AboutOverviewTextArea";

interface WorkUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: WorkData | undefined;
	handleCloseForm: () => void;
}

const WorkUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: WorkUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useWorkUserOverviewForm({
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
			<AboutOverviewTextInput
				category={"company"}
				isSelectedValue={!!formValues.values?.company}
				register={{ ...register("values.company"), required: true }}
				labelText="Company"
			/>
			<AboutOverviewTextInput
				category={"position"}
				isSelectedValue={!!formValues.values?.position}
				register={{ ...register("values.position") }}
				labelText="Position"
			/>
			<AboutOverviewTextInput
				category={"city"}
				isSelectedValue={!!formValues.values?.city}
				register={{ ...register("values.city") }}
				labelText="City/Town"
			/>
			<AboutOverviewTextArea
				category={"description"}
				isSelectedValue={!!formValues.values?.description}
				register={{ ...register("values.description") }}
				labelText="Description"
			/>
			<TimePeriod
				checkboxText="I currently work here"
				checked={formValues.values?.current}
				selectedValues={{
					startYear: formValues.values?.startYear,
					startMonth: formValues.values?.startMonth,
					endYear: formValues.values?.endYear,
					endMonth: formValues.values?.endMonth,
				}}
				inputs={{
					checked: register("values.current"),
					startYear: register("values.startYear"),
					startMonth: register("values.startMonth"),
					startDay: register("values.startDay"),
					endYear: register("values.endYear"),
					endMonth: register("values.endMonth"),
					endDay: register("values.endDay"),
				}}
			/>
		</StandardUserOverviewForm>
	);
};

export default WorkUserOverviewForm;
