import AboutOverviewTextArea from "@/components/Shared/FormComponents/TextArea/AboutOverviewTextArea";
import StandardUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface AboutFavoriteQuotesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}

const AboutFavoriteQuotesForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: AboutFavoriteQuotesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<string>({
			audience,
			initialValues,
			url: "quotes",
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
				category={"favoriteQuotes"}
				isSelectedValue={!!formValues.values}
				register={{ ...register("values") }}
				labelText="Favorite quotes"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutFavoriteQuotesForm;
