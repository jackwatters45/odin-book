import UserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { mdiBookAccount } from "@mdi/js";
import AboutFavoriteQuotesForm from "./form";

interface AboutFavoriteQuotesProps {
	initialValues: string | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const AboutFavoriteQuotes = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: AboutFavoriteQuotesProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "quotes", param: undefined });

	return (
		<UserAboutOverviewItem
			title={initialValues ? [{ type: "text", content: initialValues }] : null}
			audience={audience}
			category={"favoriteQuotes"}
			categoryDisplayName="Favorite Quotes"
			addText={"Add your favorite quotes"}
			isEditing={isEditing}
			icon={mdiBookAccount}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<AboutFavoriteQuotesForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutFavoriteQuotes;
