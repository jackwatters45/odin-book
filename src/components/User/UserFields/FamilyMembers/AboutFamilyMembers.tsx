import UserAboutOverviewItem from "../../../Shared/USER/UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutFamilyMembersForm from "./form";
import { FamilyMember } from "./types/FamilyMembers";
import { defaultUserAvatar } from "@/config/globals";
import useAboutFamilyMembers from "./useAboutFamilyMembers";

interface AboutFamilyMembersProps {
	familyMember: FamilyMember | undefined;
	audience: AudienceStatusOptions;
}

const AboutFamilyMembers = ({ familyMember, audience }: AboutFamilyMembersProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation, title } =
		useAboutFamilyMembers({ familyMember });

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
				<AboutFamilyMembersForm
					audience={audience}
					initialValues={familyMember}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutFamilyMembers;
