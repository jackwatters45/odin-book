import { StyledUserAboutContainer } from "@/styles/SharedStyles";
import UserAboutEducationSection from "./Sections/UserAboutEducationSection";
import UserAboutWorkSection from "./Sections/UserAboutWorkSection";

import useUserAboutWorkEducation from "./useUserAboutWorkEducation";

// TODO subtitle different
// TODO subtext other -> multiple/future Current
const UserAboutWorkEducation = () => {
	const { workContent, collegeContent, highSchoolContent } = useUserAboutWorkEducation();

	return (
		<StyledUserAboutContainer>
			<UserAboutWorkSection content={workContent} />
			<UserAboutEducationSection fieldName="college" content={collegeContent} />
			<UserAboutEducationSection fieldName="high school" content={highSchoolContent} />
		</StyledUserAboutContainer>
	);
};

export default UserAboutWorkEducation;
