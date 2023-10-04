import AboutOverviewTextArea from "@/components/Shared/TextArea/AboutOverviewTextArea";
import StandardUserOverviewForm from "@/components/User/Shared/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/User/Shared/StandardUserOverviewForm/useStandardUserOverviewForm";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

interface FavoriteQuotesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}

const FavoriteQuotesForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: FavoriteQuotesFormProps) => {
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

export default FavoriteQuotesForm;
