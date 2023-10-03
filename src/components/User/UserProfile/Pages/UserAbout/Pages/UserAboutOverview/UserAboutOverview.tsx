import useUserAboutOverview from "./useUserAboutOverview";

import AboutOverviewWork from "../../../../../UserFields/Work";
import AboutOverviewEducation from "./UserAboutOverviewItems/Sections/Education/OverviewItem";
import AboutOverviewRelationship from "../../../../../UserFields/RelationshipStatus";
import AboutOverviewPhoneNumber from "../../../../../UserFields/PhoneNumber";
import { StyledUserAboutOverview } from "./UserAboutOverview.styles";
import AboutOverviewCurrentCity from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewCurrentCity";
import AboutOverviewHometown from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewHometown";

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
			<AboutOverviewWork
				initialValues={mostRecentWork}
				pastCompany={pastCompany}
				audience={mostRecentWorkAudience}
			/>
			<AboutOverviewEducation education={education} audience={educationAudience} />
			<AboutOverviewCurrentCity
				currentCity={currentCity}
				audience={currentCityAudience}
			/>
			<AboutOverviewHometown hometown={hometown} audience={hometownAudience} />
			<AboutOverviewRelationship
				relationship={relationship}
				audience={relationshipStatusAudience}
			/>
			<AboutOverviewPhoneNumber
				phoneNumber={phoneNumber}
				audience={phoneNumberAudience}
			/>
		</StyledUserAboutOverview>
	);
};

export default UserAboutOverview;
