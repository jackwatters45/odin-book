import useUserAboutOverview from "./useUserAboutOverview";

import AboutOverviewCurrentCity from "./UserAboutOverviewItems/Sections/CurrentCity";
import AboutOverviewWork from "./UserAboutOverviewItems/Sections/Work";
import AboutOverviewEducation from "./UserAboutOverviewItems/Sections/Education/OverviewItem";
import AboutOverviewHometown from "./UserAboutOverviewItems/Sections/Hometown";
import AboutOverviewRelationship from "./UserAboutOverviewItems/Sections/Relationship";
import AboutOverviewPhoneNumber from "./UserAboutOverviewItems/Sections/PhoneNumber";
import { StyledUserAboutOverview } from "./UserAboutOverview.styles";

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
