import UserAboutEducationSection from "./Sections/UserAboutEducationSection";
import UserAboutWorkSection from "./Sections/UserAboutWorkSection";
import { StyledAboutWorkEducationContainer } from "./UserAboutWorkEducation.styles";
import useUserAboutWorkEducation from "./useUserAboutWorkEducation";

// TODO subtitle different
// TODO subtext other -> multiple/future Current

const UserAboutWorkEducation = () => {
	const { workContent, collegeContent, highSchoolContent } = useUserAboutWorkEducation();

	return (
		<StyledAboutWorkEducationContainer>
			<UserAboutWorkSection content={workContent} />
			<UserAboutEducationSection fieldName="college" content={collegeContent} />
			<UserAboutEducationSection fieldName="high school" content={highSchoolContent} />
		</StyledAboutWorkEducationContainer>
	);
};

export default UserAboutWorkEducation;
