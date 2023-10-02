import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import AboutOverviewRelationship from "../UserAboutOverview/UserAboutOverviewItems/Sections/Relationship/AboutOverviewRelationship";
import EmptyUserAboutFamilyMembers from "@/components/User/UserFields/FamilyMembers/empty/EmptyAboutFamilyMembers";
import AboutFamilyMembers from "@/components/User/UserFields/FamilyMembers";
import useUserAboutRelationshipFamily from "./useUserAboutRelationshipFamily";

// TODO add this search to relationship + search search

// TODO add default attributes to standard components (see button)
// TODO check validation
// TODO remove grid view and don't do life events

// TODO fix intro - check website + social links as well
// TODO default audience settings (decide + implement)
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