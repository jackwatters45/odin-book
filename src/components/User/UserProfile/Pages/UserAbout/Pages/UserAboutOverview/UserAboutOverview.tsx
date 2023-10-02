import useUserAboutOverview from "./useUserAboutOverview";

import AboutOverviewWork from "./UserAboutOverviewItems/Sections/Work";
import AboutOverviewEducation from "./UserAboutOverviewItems/Sections/Education/OverviewItem";
import AboutOverviewRelationship from "../../../../../UserFields/RelationshipStatus";
import AboutOverviewPhoneNumber from "../../../../../UserFields/PhoneNumber";
import { StyledUserAboutOverview } from "./UserAboutOverview.styles";
import AboutOverviewCurrentCity from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewCurrentCity";
import AboutOverviewHometown from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewHometown";

// TODO organize everything smaller
const UserAboutOverview = () => {
	const {
		mostRecentWork,
		mostRecentWorkAudience,
		pastCompany,
		education,
		educationAudience,
		relationship,
		phoneNumber,
		currentCity,
		hometown,
		audienceSettings,
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
				audience={audienceSettings.currentCity}
			/>
			<AboutOverviewHometown hometown={hometown} audience={audienceSettings.hometown} />
			<AboutOverviewRelationship
				relationship={relationship}
				audience={audienceSettings.relationshipStatus}
			/>
			<AboutOverviewPhoneNumber
				phoneNumber={phoneNumber}
				audience={audienceSettings.phoneNumber}
			/>
		</StyledUserAboutOverview>
	);
};

export default UserAboutOverview;
