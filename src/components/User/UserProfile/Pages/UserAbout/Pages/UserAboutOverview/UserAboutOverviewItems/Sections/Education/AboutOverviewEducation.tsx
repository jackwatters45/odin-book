import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { EducationData } from "@/types/IUser";
import EducationUserOverviewItem from "./OverviewItem/EducationUserAboutOverviewItem";

interface AboutOverviewEducationProps {
	education: EducationData | undefined;
	audience: AudienceStatusOptions;
}

const AboutOverviewEducation = ({ education, audience }: AboutOverviewEducationProps) => {
	const formType = education?.type || ("both" as const);

	if (formType === "both") {
		return (
			<>
				<EducationUserOverviewItem
					audience={audience}
					initialValues={education}
					formType={"high school"}
				/>
				<EducationUserOverviewItem
					audience={audience}
					initialValues={education}
					formType={"college"}
				/>
			</>
		);
	}

	return (
		<EducationUserOverviewItem
			audience={audience}
			initialValues={education}
			formType={formType}
		/>
	);
};

export default AboutOverviewEducation;
