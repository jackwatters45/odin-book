import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import useAboutLanguagesForm from "./useAboutLanguagesForm";
import StandardUserOverviewForm from "@/components/Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import { StyledStandardButton } from "./AboutLanguagesForm.styles";

interface AboutLanguagesFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string[];
}

const AboutLanguagesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutLanguagesFormProps) => {
	const {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		languages,
		handleAddLanguage,
		handleBlur,
	} = useAboutLanguagesForm({
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
			{languages?.map((_, index) => (
				<AboutOverviewTextInput
					key={index}
					category={"languages"}
					isSelectedValue={!!formValues.values?.[index]}
					register={{ ...register(`values.${index}`) }}
					labelText="Language"
					onBlur={() => handleBlur(index)}
				/>
			))}
			<StyledStandardButton onClick={handleAddLanguage} text="Add Language" />
		</StandardUserOverviewForm>
	);
};

export default AboutLanguagesForm;
