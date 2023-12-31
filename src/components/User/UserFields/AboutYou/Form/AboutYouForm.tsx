import AboutOverviewTextArea from "@/components/Shared/TextArea/AboutOverviewTextArea";
import StandardUserOverviewForm from "@/components/User/Shared/UserForm";
import useUserForm from "@/components/User/Shared/UserForm/useUserForm";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

interface AboutYouFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}

const AboutYouForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: AboutYouFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<string>({
			audience,
			initialValues,
			url: "about-you",
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
			<AboutOverviewTextArea
				category={"aboutYou"}
				isSelectedValue={!!formValues.values}
				register={{ ...register("values") }}
				labelText="About you"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutYouForm;
