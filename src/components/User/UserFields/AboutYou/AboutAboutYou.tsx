import UserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutAboutYouForm from "./form";

interface AboutAboutYouProps {
	initialValues: string | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const AboutAboutYou = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: AboutAboutYouProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "about-you", param: undefined });

	return (
		<UserAboutOverviewItem
			title={initialValues ? [{ type: "text", content: initialValues }] : null}
			audience={audience}
			category={"aboutYou"}
			categoryDisplayName="About you"
			addText={"Write some details about yourself"}
			isEditing={isEditing}
			icon={undefined}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<AboutAboutYouForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutAboutYou;
