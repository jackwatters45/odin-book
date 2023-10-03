import StandardUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { INamePronunciation } from "../types/NamePronunciation";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";

interface AboutAboutYouFormProps {
	audience: AudienceStatusOptions;
	initialValues: INamePronunciation | undefined;
	handleCloseForm: () => void;
}

const AboutAboutYouForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: AboutAboutYouFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<INamePronunciation>({
			audience,
			initialValues,
			url: "name-pronunciation",
			method: "PATCH",
			param: undefined,
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
				category={"firstNamePronunciation"}
				isSelectedValue={!!formValues.values?.firstName}
				register={{ ...register("values.firstName") }}
				labelText="First name"
			/>
			<AboutOverviewTextInput
				category={"lastNamePronunciation"}
				isSelectedValue={!!formValues.values?.lastName}
				register={{ ...register("values.lastName") }}
				labelText="Last name"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutAboutYouForm;
