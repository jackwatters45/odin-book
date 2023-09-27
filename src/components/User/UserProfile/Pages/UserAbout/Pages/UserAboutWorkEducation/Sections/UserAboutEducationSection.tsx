import { EducationData } from "@/types/IUser";
import UserAboutWorkEducationSection, {
	UserAboutWorkEducationSectionContent,
} from "./UserAboutEducationSection/UserAboutWorkEducationSection";
import EducationUserOverviewForm from "../../UserAboutOverview/UserAboutOverviewItems/Sections/Education/OverviewItem/form/EducationUserOverviewForm";
import EducationUserOverviewItem from "../../UserAboutOverview/UserAboutOverviewItems/Sections/Education/OverviewItem/EducationUserAboutOverviewItem";

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
			ExistingFormComponent={EducationUserOverviewItem}
		/>
	);
};

export default UserAboutEducationSection;
