import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutDetails from "./useUserAboutDetails";
import AboutYou from "@/components/User/UserFields/AboutYou";
import AboutNamePronunciation from "@/components/User/UserFields/NamePronunciation";
import AboutFavoriteQuotes from "@/components/User/UserFields/FavoriteQuotes";
import AboutOtherNames from "@/components/User/UserFields/OtherNames";
import AddOtherNames from "@/components/User/UserFields/OtherNames/Add";

const UserAboutDetails = () => {
	const { audienceSettings, aboutYou, namePronunciation, otherNames, favoriteQuotes } =
		useUserAboutDetails();

	return (
		<StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>About you</BoldText>
				<AboutYou initialValues={aboutYou} audience={audienceSettings.aboutYou} />
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Name pronunciation</BoldText>
				<AboutNamePronunciation
					initialValues={namePronunciation}
					audience={audienceSettings.namePronunciation}
				/>
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Other names</BoldText>
				<AddOtherNames />
				{otherNames?.map((otherName) => (
					<AboutOtherNames
						key={otherName._id}
						initialValues={otherName}
						audience={audienceSettings?.otherNames?.[otherName._id as string]}
					/>
				))}
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Favorite quotes</BoldText>
				<AboutFavoriteQuotes
					initialValues={favoriteQuotes}
					audience={audienceSettings.favoriteQuotes}
				/>
			</StyledUserAboutContainer>
		</StyledUserAboutContainer>
	);
};

export default UserAboutDetails;
