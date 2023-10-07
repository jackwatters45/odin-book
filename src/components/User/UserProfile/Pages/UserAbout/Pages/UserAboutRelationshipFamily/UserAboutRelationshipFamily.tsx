import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";

import AddFamilyMembers from "@/components/User/UserFields/FamilyMembers/Add";
import AboutFamilyMembers from "@/components/User/UserFields/FamilyMembers";
import useUserAboutRelationshipFamily from "./useUserAboutRelationshipFamily";
import AboutOverviewRelationship from "@/components/User/UserFields/RelationshipStatus/Relationship";
import FamilyMembersPlaceholder from "@/components/User/UserFields/FamilyMembers/Placeholder/FamilyMembersPlaceholder";

const UserAboutRelationshipFamily = () => {
	const { isOwnProfile, relationship, audienceSettings, familyMembers } =
		useUserAboutRelationshipFamily();

	return (
		<StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Relationship</BoldText>
				<AboutOverviewRelationship
					relationship={relationship}
					audience={audienceSettings.relationshipStatus}
				/>
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Family members</BoldText>
				{isOwnProfile ? <AddFamilyMembers /> : <FamilyMembersPlaceholder />}
				<StyledUserAboutContainer>
					{familyMembers?.map((familyMember) => (
						<AboutFamilyMembers
							key={familyMember._id}
							familyMember={familyMember}
							audience={audienceSettings?.familyMembers?.[familyMember._id as string]}
						/>
					))}
				</StyledUserAboutContainer>
			</StyledUserAboutContainer>
		</StyledUserAboutContainer>
	);
};

export default UserAboutRelationshipFamily;
