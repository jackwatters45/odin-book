import UserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { mdiBookAccount } from "@mdi/js";
import AboutOtherNamesForm from "./form";
import { OtherName } from "./types/OtherNames";

interface AboutOtherNamesProps {
	initialValues: OtherName | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const AboutOtherNames = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: AboutOtherNamesProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "other-names", param: initialValues?._id });

	return (
		<UserAboutOverviewItem
			title={initialValues ? [{ type: "text", content: initialValues.name }] : null}
			subtitle={initialValues ? initialValues.type : null}
			audience={audience}
			category={"otherNames"}
			categoryDisplayName="Other Names"
			addText={"Add a nickname, a birth name..."}
			isEditing={isEditing}
			icon={mdiBookAccount}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			itemId={initialValues?._id}
			FormComponent={
				<AboutOtherNamesForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutOtherNames;
