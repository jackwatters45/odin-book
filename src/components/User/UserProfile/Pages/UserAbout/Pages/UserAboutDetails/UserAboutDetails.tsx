import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutDetails from "./useUserAboutDetails";
import AboutAboutYou from "@/components/User/UserFields/AboutYou/AboutAboutYou";
import AboutNamePronunciation from "@/components/User/UserFields/NamePronunciation/AboutNamePronunciation";
import AboutFavoriteQuotes from "@/components/User/UserFields/FavoriteQuotes/AboutFavoriteQuotes";
import AboutOtherNames from "@/components/User/UserFields/OtherNames/AboutOtherNames";
import EmptyAboutOtherNames from "@/components/User/UserFields/OtherNames/empty/EmptyAboutOtherNames";

const UserAboutDetails = () => {
	const { audienceSettings, aboutYou, namePronunciation, otherNames, favoriteQuotes } =
		useUserAboutDetails();

	return (
		<StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>About you</BoldText>
				<AboutAboutYou initialValues={aboutYou} audience={audienceSettings.aboutYou} />
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
				<EmptyAboutOtherNames />
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
