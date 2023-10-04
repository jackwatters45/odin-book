import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import FamilyMembersForm from "./Form";
import { FamilyMember } from "./types/FamilyMembersTypes";
import useFamilyMembers from "./useFamilyMembers";
import defaultUserAvatar from "../Avatar/utils/defaultUserAvatar";

interface FamilyMembersProps {
	familyMember: FamilyMember | undefined;
	audience: AudienceStatusOptions;
}

const FamilyMembers = ({ familyMember, audience }: FamilyMembersProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation, title } =
		useFamilyMembers({ familyMember });

	return (
		<UserAboutOverviewItem
			title={title}
			category={`familyMembers.${familyMember?._id}`}
			categoryDisplayName="family members"
			subtitle={familyMember ? familyMember.relationship : null}
			audience={audience}
			icon={familyMember?.user.avatarUrl || defaultUserAvatar}
			iconType={"image"}
			addText={"Add familyMembers to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			itemId={familyMember?._id}
			FormComponent={
				<FamilyMembersForm
					audience={audience}
					initialValues={familyMember}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default FamilyMembers;
