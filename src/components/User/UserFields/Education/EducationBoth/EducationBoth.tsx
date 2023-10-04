import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import EducationUserOverviewItem from "../Education";
import { EducationData } from "../types/EducationTypes";

interface EducationBothProps {
	education: EducationData | undefined;
	audience: AudienceStatusOptions;
}

const EducationBoth = ({ education, audience }: EducationBothProps) => {
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

export default EducationBoth;
