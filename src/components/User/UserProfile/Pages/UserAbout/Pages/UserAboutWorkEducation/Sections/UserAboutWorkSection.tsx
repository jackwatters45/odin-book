import { WorkData } from "@/types/IUser";
import UserAboutWorkEducationSection, {
	UserAboutWorkEducationSectionContent,
} from "./UserAboutEducationSection/UserAboutWorkEducationSection";
import WorkUserOverviewForm from "../../UserAboutOverview/UserAboutOverviewItems/Sections/Work/form/WorkUserOverviewForm";
import WorkUserOverviewItem from "../../UserAboutOverview/UserAboutOverviewItems/Sections/Work/WorkUserOverviewItem";

interface UserAboutWorkSectionProps {
	content: UserAboutWorkEducationSectionContent<WorkData>[] | undefined;
}

const UserAboutWorkSection = ({ content }: UserAboutWorkSectionProps) => {
	return (
		<UserAboutWorkEducationSection
			fieldName={"work"}
			content={content}
			NewFormComponent={WorkUserOverviewForm}
			ExistingFormComponent={WorkUserOverviewItem}
		/>
	);
};

export default UserAboutWorkSection;
