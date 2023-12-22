import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useFamilyMembersForm from "./useFamilyMembersForm";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import UserSearch from "../../../Shared/UserSearchSingle";
import { FamilyMember, FamilyRelationshipOptions } from "../types/FamilyMembersTypes";
import AudienceRadio from "@/components/Shared/AudienceRadio";
import { StyledAboutOverviewDialogActions } from "@/components/User/Shared/UserForm/UserForm.styles";
import { UseFormSetValue } from "react-hook-form";
import { DefaultUserSearch } from "@/components/User/Shared/UserSearchSingle/types/DefaultUserSearch";

export interface FamilyMembersFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: FamilyMember | undefined;
}

const FamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: FamilyMembersFormProps) => {
	const {
		submitForm,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isValid,
		registerSearchInput,
		searchResults,
		isLoading,
		searchQuery,
		setSearchValue,
	} = useFamilyMembersForm({
		audience,
		initialValues,
		handleCloseForm,
	});

	return (
		<form onSubmit={submitForm}>
			<UserSearch
				registerSearchInput={registerSearchInput}
				setValue={setValue as unknown as UseFormSetValue<DefaultUserSearch>}
				setSearchValue={setSearchValue}
				searchResults={searchResults}
				searchQuery={searchQuery}
				isLoading={isLoading}
				labelText="Family member"
			/>
			<FullWidthStandardSelect
				id="relationship"
				register={{ ...register("relationship"), required: true }}
				options={[
					<option value="" key="default">
						Relationship
					</option>,
					...FamilyRelationshipOptions.map((option) => (
						<option value={option} key={option}>
							{option}
						</option>
					)),
				]}
			/>
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

export default FamilyMembersForm;
