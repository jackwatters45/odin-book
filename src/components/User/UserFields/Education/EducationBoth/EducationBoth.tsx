import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import EducationUserOverviewItem from "../Education";
import { IEducation } from "../types/EducationTypes";
import useIsOwnProfile from "@/hooks/useIsOwnProfile";
import EducationBothPlaceholder from "../Placeholder/EducationPlaceholder";

interface EducationBothProps {
	education: IEducation | undefined;
	audience: AudienceStatusOptions;
}

const EducationBoth = ({ education, audience }: EducationBothProps) => {
	const formType = education?.type || ("both" as const);

	const isOwnProfile = useIsOwnProfile();

	if (formType === "both" && isOwnProfile) {
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
	} else if (formType === "both" && !isOwnProfile) {
		return <EducationBothPlaceholder />;
	}

	return (
		<EducationUserOverviewItem
			audience={audience}
			initialValues={education}
			formType={formType as IEducation["type"]}
		/>
	);
};

export default EducationBoth;
