import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm";

import useRelationshipForm from "./useRelationshipForm";
import {
	IRelationshipStatus,
	VALID_RELATIONSHIP_STATUSES_ARRAY,
} from "@/components/User/UserFields/RelationshipStatus/types/RelationshipTypes";
import UserSearch from "@/components/Shared/UserSearch";
import {
	FullWidthStandardSelect,
	StyledTimePeriodStartOnly,
} from "@/styles/SharedStyles";
import capitalizeFirstLetterString from "@/utils/format/capitalizeFirstLetterString";

interface RelationshipFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IRelationshipStatus | undefined;
}

const RelationshipForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: RelationshipFormProps) => {
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
	} = useRelationshipForm({ audience, initialValues, handleCloseForm });

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

export default RelationshipForm;
