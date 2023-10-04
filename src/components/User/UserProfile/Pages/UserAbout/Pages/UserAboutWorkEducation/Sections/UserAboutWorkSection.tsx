import UserAboutWorkEducationSection, {
	UserAboutWorkEducationSectionContent,
} from "./UserAboutEducationSection/UserAboutWorkEducationSection";
import WorkForm from "@/components/User/UserFields/Work/Form/WorkForm";
import Work from "@/components/User/UserFields/Work";
import { IWork } from "@/components/User/UserFields/Work/types/WorkTypes";

interface UserAboutWorkSectionProps {
	content: UserAboutWorkEducationSectionContent<IWork>[] | undefined;
}

const UserAboutWorkSection = ({ content }: UserAboutWorkSectionProps) => {
	return (
		<UserAboutWorkEducationSection
			fieldName={"work"}
			content={content}
			NewFormComponent={WorkForm}
			ExistingFormComponent={Work}
		/>
	);
};

export default UserAboutWorkSection;
