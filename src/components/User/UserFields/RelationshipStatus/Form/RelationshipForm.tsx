import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

import useRelationshipForm from "./useRelationshipForm";
import {
	IRelationshipStatus,
	VALID_RELATIONSHIP_STATUSES_ARRAY,
} from "@/components/User/UserFields/RelationshipStatus/types/RelationshipTypes";
import UserSearch from "@/components/User/Shared/UserSearchSingle";
import {
	FullWidthStandardSelect,
	StyledTimePeriodStartOnly,
} from "@/styles/SharedStyles";
import capitalizeFirstLetterString from "@/utils/format/capitalizeFirstLetterString";
import { UseFormSetValue } from "react-hook-form";
import { DefaultUserSearch } from "@/components/User/Shared/UserSearchSingle/types/DefaultUserSearch";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import { StyledAboutOverviewDialogActions } from "@/components/User/Shared/UserForm/UserForm.styles";

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
		submitForm,
		control,
		setValue,
		register,
		formValues,
		defaultValues,
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
		setSearchValue,
		isValid,
		showSearch,
	} = useRelationshipForm({ audience, initialValues, handleCloseForm });

	return (
		<form onSubmit={submitForm}>
			<FullWidthStandardSelect
				id="status"
				register={{ ...register("status"), required: true }}
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
						registerSearchInput={registerSearchInput}
						setValue={setValue as unknown as UseFormSetValue<DefaultUserSearch>}
						setSearchValue={setSearchValue}
						searchResults={searchResults}
						searchQuery={searchQuery}
						isLoading={isLoading}
						labelText="Partner"
					/>
					<StyledTimePeriodStartOnly
						title="Since"
						checked={undefined}
						selectedValues={{
							startYear: formValues.startYear,
							startMonth: formValues.startMonth,
						}}
						inputs={{
							startYear: register("startYear"),
							startMonth: register("startMonth"),
							startDay: register("startDay"),
						}}
					/>
				</>
			)}
			<StyledAboutOverviewDialogActions
				handleCancel={handleCloseForm}
				handleSave={undefined}
				initial={defaultValues}
				unsavedValue={formValues}
				disableSave={!isValid}
				unchangedBehavior="disable"
				leftColumn={
					<AudienceRadio
						formField={"audience"}
						initial={audience}
						control={control}
						setValue={setValue}
						submitsForm={false}
						submitButtonText={"Done"}
					/>
				}
			/>
		</form>
	);
};

export default RelationshipForm;
