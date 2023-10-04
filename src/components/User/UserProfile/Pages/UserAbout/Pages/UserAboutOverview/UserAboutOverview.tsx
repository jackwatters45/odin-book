import Work from "@/components/User/UserFields/Work";
import { StyledUserAboutOverview } from "./UserAboutOverview.styles";
import useUserAboutOverview from "./useUserAboutOverview";
import CurrentCity from "@/components/User/UserFields/PlacesLived/CurrentCity";
import Hometown from "@/components/User/UserFields/PlacesLived/Hometown";
import Relationship from "@/components/User/UserFields/RelationshipStatus/Relationship";
import PhoneNumber from "@/components/User/UserFields/PhoneNumber";
import EducationBoth from "@/components/User/UserFields/Education/EducationBoth";

const UserAboutOverview = () => {
	const {
		mostRecentWork,
		mostRecentWorkAudience,
		pastCompany,
		education,
		educationAudience,
		currentCity,
		currentCityAudience,
		hometown,
		hometownAudience,
		relationship,
		relationshipStatusAudience,
		phoneNumber,
		phoneNumberAudience,
	} = useUserAboutOverview();

	return (
		<StyledUserAboutOverview>
			<Work
				initialValues={mostRecentWork}
				pastCompany={pastCompany}
				audience={mostRecentWorkAudience}
			/>
			<EducationBoth education={education} audience={educationAudience} />
			<CurrentCity currentCity={currentCity} audience={currentCityAudience} />
			<Hometown hometown={hometown} audience={hometownAudience} />
			<Relationship relationship={relationship} audience={relationshipStatusAudience} />
			<PhoneNumber phoneNumber={phoneNumber} audience={phoneNumberAudience} />
		</StyledUserAboutOverview>
	);
};

export default UserAboutOverview;
