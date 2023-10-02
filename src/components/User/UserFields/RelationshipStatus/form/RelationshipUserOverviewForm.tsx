import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";

import useRelationshipUserOverviewForm from "./useRelationshipUserOverviewForm";
import { IRelationshipStatus } from "@/components/User/UserFields/RelationshipStatus/types/IRelationshipStatus";
import UserSearch from "@/components/Shared/UserSearch";
import {
	FullWidthStandardSelect,
	StyledTimePeriodStartOnly,
} from "@/styles/SharedStyles";
import VALID_RELATIONSHIP_STATUSES_ARRAY from "../types/validRelationshipStatuses";
import capitalizeFirstLetterString from "@/utils/capitalizeFirstLetterString";

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
	const {
		handleSubmit,
		control,
		setValue,
		register,
		formValues,
		defaultValues,
		searchQuery,
		searchResults,
		isLoading,
		isValid,
		showSearch,
	} = useRelationshipUserOverviewForm({ audience, initialValues, handleCloseForm });

	return (
		<StandardUserOverviewForm
			handleCloseForm={handleCloseForm}
			audience={audience}
			initial={defaultValues}
			formValues={formValues}
			handleSave={handleSubmit}
			control={control}
			setValue={setValue}
			disableSave={!isValid}
		>
			<FullWidthStandardSelect
				id="status"
				register={{ ...register("values.status"), required: true }}
				options={[
					<option value="" key="default">
						Status
					</option>,
					...VALID_RELATIONSHIP_STATUSES_ARRAY.map(({ status }) => (
						<option value={status} key={status}>
							{capitalizeFirstLetterString(status)}
						</option>
					)),
				]}
			/>
			{showSearch && (
				<>
					<UserSearch
						register={{ ...register("values.search"), required: true }}
						setValue={setValue}
						searchResults={searchResults}
						searchQuery={searchQuery}
						isLoading={isLoading}
						labelText="Partner"
					/>
					<StyledTimePeriodStartOnly
						title="Since"
						checked={undefined}
						selectedValues={{
							startYear: formValues.values?.startYear,
							startMonth: formValues.values?.startMonth,
						}}
						inputs={{
							startYear: register("values.startYear"),
							startMonth: register("values.startMonth"),
							startDay: register("values.startDay"),
						}}
					/>
				</>
			)}
		</StandardUserOverviewForm>
	);
};

export default RelationshipUserOverviewForm;
