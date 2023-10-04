import EmptyUserAboutCurrentCity from "@/components/User/UserFields/PlacesLived/CurrentCity/Empty/EmptyCurrentCity";
import EmptyUserAboutHometown from "@/components/User/UserFields/PlacesLived/Hometown/Empty/EmptyHometown";
import EmptyUserAboutPlacesLived from "@/components/User/UserFields/PlacesLived/Empty/EmptyPlacesLived";
import AboutOverviewCurrentCity from "@/components/User/UserFields/PlacesLived/CurrentCity/AboutOverviewCurrentCity";
import AboutOverviewHometown from "@/components/User/UserFields/PlacesLived/Hometown/Hometown";
import AboutOverviewPlacesLived from "@/components/User/UserFields/PlacesLived/PlacesLived";
import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutPlacesLived from "./useUserAboutPlacesLived";

const UserAboutPlacesLived = () => {
	const {
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
			{!isHometown && <EmptyUserAboutHometown />}
			{!isCurrentCity && <EmptyUserAboutCurrentCity />}
			<EmptyUserAboutPlacesLived />
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
							categoryDisplayName="city"
							categoryUrl="places-lived"
						/>
					);
				})}
		</StyledUserAboutContainer>
	);
};

export default UserAboutPlacesLived;
