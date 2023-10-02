import StandardUserOverviewForm from "@/components/Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useAboutFamilyMembersForm from "./useAboutFamilyMembers";
import { FullWidthStandardSelect } from "@/styles/SharedStyles";
import UserSearch from "../../../../Shared/UserSearch";
import { FamilyMember, FamilyRelationshipOptions } from "../types/FamilyMembers";

export interface AboutFamilyMembersFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: FamilyMember | undefined;
}

const AboutFamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutFamilyMembersFormProps) => {
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
	} = useAboutFamilyMembersForm({
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

export default AboutFamilyMembersForm;
