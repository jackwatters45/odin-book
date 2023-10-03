import { WorkData } from "@/types/IUser";
import UserAboutWorkEducationSection, {
	UserAboutWorkEducationSectionContent,
} from "./UserAboutEducationSection/UserAboutWorkEducationSection";
import WorkUserOverviewForm from "../../../../../../UserFields/Work/form/WorkUserOverviewForm";
import WorkUserOverviewItem from "../../../../../../UserFields/Work/WorkUserOverviewItem";

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
