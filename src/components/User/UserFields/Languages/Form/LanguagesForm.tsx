import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import useLanguagesForm from "./useLanguagesForm";
import StandardUserOverviewForm from "@/components/User/Shared/StandardUserOverviewForm";
import { StyledStandardButton } from "./LanguagesForm.styles";

interface LanguagesFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string[];
}

const LanguagesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: LanguagesFormProps) => {
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
	} = useLanguagesForm({
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

export default LanguagesForm;
