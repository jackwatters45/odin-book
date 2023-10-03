import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";

import EmptyUserAboutFamilyMembers from "@/components/User/UserFields/FamilyMembers/empty/EmptyAboutFamilyMembers";
import AboutFamilyMembers from "@/components/User/UserFields/FamilyMembers";
import useUserAboutRelationshipFamily from "./useUserAboutRelationshipFamily";
import AboutOverviewRelationship from "@/components/User/UserFields/RelationshipStatus/AboutOverviewRelationship";

// TODO fix intro - check website + social links as well
const UserAboutRelationshipFamily = () => {
	const { relationship, audienceSettings, familyMembers } =
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
				<EmptyUserAboutFamilyMembers />
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
