import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../../../../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";

import useRelationshipUserOverviewForm from "./useRelationshipUserOverviewForm";
import { IRelationshipStatus } from "@/types/IRelationshipStatus";

interface RelationshipUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IRelationshipStatus | undefined;
}

const RelationshipUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: RelationshipUserOverviewFormProps) => {
	const { handleSubmit, control, setValue, formValues, defaultValues } =
		useRelationshipUserOverviewForm({ audience, initialValues, handleCloseForm });

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
			{/* <AboutOverviewTextInput
				category={"status"}
				selectedValue={statusValue}
				register={{ ...register("values.status"), required: true }}
				labelText="Relationship status"
			/>
			<AboutOverviewTextInput
				category={"partner"}
				selectedValue={partnerValue}
				register={{ ...register("values.partner") }}
				labelText="Partner"
			/> */}
		</StandardUserOverviewForm>
	);
};

export default RelationshipUserOverviewForm;
