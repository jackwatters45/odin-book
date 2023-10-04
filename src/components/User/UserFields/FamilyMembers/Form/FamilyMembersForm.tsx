import StandardUserOverviewForm from "@/components/Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useFamilyMembersForm from "./useFamilyMembers";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import UserSearch from "../../../../Shared/UserSearch";
import { FamilyMember, FamilyRelationshipOptions } from "../types/FamilyMembersTypes";

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
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isValid,
		searchResults,
		isLoading,
		searchQuery,
	} = useFamilyMembersForm({
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
			disableSave={!isValid}
		>
			<UserSearch
				register={{ ...register("values.search"), required: true }}
				setValue={setValue}
				searchResults={searchResults}
				searchQuery={searchQuery}
				isLoading={isLoading}
				labelText="Family member"
			/>
			<FullWidthStandardSelect
				id="relationship"
				register={{ ...register("values.relationship"), required: true }}
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
		</StandardUserOverviewForm>
	);
};

export default FamilyMembersForm;
