import UserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty";
import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { mdiBookAccount } from "@mdi/js";
import FavoriteQuotesForm from "./Form";

interface FavoriteQuotesProps {
	initialValues: string | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
}

const FavoriteQuotes = ({
	initialValues,
	audience,
	includeAddDetailLink = true,
}: FavoriteQuotesProps) => {
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
				<FavoriteQuotesForm
					audience={audience}
					initialValues={initialValues}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default FavoriteQuotes;
