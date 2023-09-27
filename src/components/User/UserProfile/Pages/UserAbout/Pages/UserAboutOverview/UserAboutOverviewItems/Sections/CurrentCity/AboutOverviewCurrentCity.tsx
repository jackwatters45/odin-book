import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import UserAboutOverviewItem from "../../UserAboutOverviewItem";
import { mdiHomeCity } from "@mdi/js";
import { PlaceLivedData } from "@/types/IUser";
import formatCity from "@/components/User/UserFields/PlacesLived/formatCity";
import useUserAboutOverviewItem from "../../UserAboutOverviewItem/useUserAboutOverviewItem";
import CurrentCityUserOverviewForm from "./form/CurrentCityUserOverviewForm";

interface AboutOverviewCurrentCityProps {
	currentCity: PlaceLivedData | undefined;
	audience: AudienceStatusOptions;
}

const AboutOverviewCurrentCity = ({
	currentCity,
	audience,
}: AboutOverviewCurrentCityProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "current-city" });

	return (
		<UserAboutOverviewItem
			title={
				currentCity?._id
					? [
							{ type: "text", content: "Lives in " },
							{ type: "bold", content: formatCity(currentCity.city, currentCity.state) },
					  ]
					: null
			}
			category="currentCity"
			categoryDisplayName="current city"
			audience={audience}
			icon={mdiHomeCity}
			addText="Add current city to profile"
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			FormComponent={
				<CurrentCityUserOverviewForm
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={currentCity}
				/>
			}
		/>
	);
};

export default AboutOverviewCurrentCity;
