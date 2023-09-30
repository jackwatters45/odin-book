import EmptyUserAboutCurrentCity from "@/components/User/UserFields/PlacesLived/EmptyUserOverviewComponent/EmptyUserAboutCurrentCity";
import EmptyUserAboutHometown from "@/components/User/UserFields/PlacesLived/EmptyUserOverviewComponent/EmptyUserAboutHometown";
import EmptyUserAboutPlacesLived from "@/components/User/UserFields/PlacesLived/EmptyUserOverviewComponent/EmptyUserAboutPlacesLived";
import AboutOverviewCurrentCity from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewCurrentCity";
import AboutOverviewHometown from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewHometown";
import AboutOverviewPlacesLived from "@/components/User/UserFields/PlacesLived/UserAboutComponents/AboutOverviewPlacesLived";
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
