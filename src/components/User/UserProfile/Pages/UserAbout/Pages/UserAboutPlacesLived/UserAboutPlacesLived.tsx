import AddCurrentCity from "@/components/User/UserFields/PlacesLived/CurrentCity/Add";
import AddHometown from "@/components/User/UserFields/PlacesLived/Hometown/Add";
import AddPlacesLived from "@/components/User/UserFields/PlacesLived/Add";
import AboutOverviewCurrentCity from "@/components/User/UserFields/PlacesLived/CurrentCity/AboutOverviewCurrentCity";
import AboutOverviewHometown from "@/components/User/UserFields/PlacesLived/Hometown/Hometown";
import AboutOverviewPlacesLived from "@/components/User/UserFields/PlacesLived/PlacesLived";
import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutPlacesLived from "./useUserAboutPlacesLived";
import { mdiMapMarker } from "@mdi/js";
import HometownPlaceholder from "@/components/User/UserFields/PlacesLived/Hometown/Placeholder";
import CurrentCityPlaceholder from "@/components/User/UserFields/PlacesLived/CurrentCity/Placeholder/CurrentCityPlaceholder";

const UserAboutPlacesLived = () => {
	const {
		isOwnProfile,
		hometown,
		isHometown,
		homeTownAudience,
		currentCity,
		isCurrentCity,
		currentCityAudience,
		audienceSettings,
		sortedPlacesLived,
	} = useUserAboutPlacesLived();

	return (
		<StyledUserAboutContainer>
			<BoldText>Places lived</BoldText>
			{!isHometown && (isOwnProfile ? <AddHometown /> : <HometownPlaceholder />)}
			{!isCurrentCity && (isOwnProfile ? <AddCurrentCity /> : <CurrentCityPlaceholder />)}
			{isOwnProfile && <AddPlacesLived />}
			{isHometown && (
				<AboutOverviewHometown
					hometown={hometown}
					audience={homeTownAudience}
					includeAddDetailLink={false}
					includePrefix={false}
				/>
			)}
			{isCurrentCity && (
				<AboutOverviewCurrentCity
					currentCity={currentCity}
					audience={currentCityAudience}
					includeAddDetailLink={false}
					includePrefix={false}
				/>
			)}
			{sortedPlacesLived &&
				sortedPlacesLived?.length > 0 &&
				sortedPlacesLived.map((placeLived) => {
					const audience = audienceSettings?.placesLived?.[placeLived._id] ?? "Public";
					return (
						<AboutOverviewPlacesLived
							key={placeLived._id}
							placeLived={placeLived}
							audience={audience}
							category={`placesLived.${placeLived._id}`}
							icon={mdiMapMarker}
							categoryDisplayName="city"
							categoryUrl="places-lived"
							PlaceholderComponent={undefined}
						/>
					);
				})}
		</StyledUserAboutContainer>
	);
};

export default UserAboutPlacesLived;
