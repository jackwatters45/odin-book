import { EducationData } from "@/components/User/UserFields/Education/types/EducationTypes";
import UserAboutWorkEducationSection, {
	UserAboutWorkEducationSectionContent,
} from "./UserAboutEducationSection/UserAboutWorkEducationSection";
import EducationUserOverviewForm from "@/components/User/UserFields/Education/Form";
import Education from "@/components/User/UserFields/Education";

interface UserAboutEducationSectionProps {
	fieldName: "high school" | "college";
	content: UserAboutWorkEducationSectionContent<EducationData>[] | undefined;
}

const UserAboutEducationSection = ({
	fieldName,
	content,
}: UserAboutEducationSectionProps) => {
	return (
		<UserAboutWorkEducationSection
			fieldName={fieldName}
			content={content}
			NewFormComponent={EducationUserOverviewForm}
			ExistingFormComponent={Education}
		/>
	);
};

export default UserAboutEducationSection;
