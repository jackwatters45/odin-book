import AboutOverviewTextArea from "@/components/Shared/FormComponents/TextArea/AboutOverviewTextArea";
import StandardUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface AboutAboutYouFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}

const AboutAboutYouForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: AboutAboutYouFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<string>({
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

export default AboutAboutYouForm;
