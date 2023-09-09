import {
	mdiBriefcase,
	mdiClockTimeFour,
	mdiCommentAccount,
	mdiHeadHeart,
	mdiHome,
	mdiMapMarker,
	mdiSchool,
	mdiVolumeHigh,
	mdiWeb,
} from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDetailsDisplayContent from "./useDetailsDisplayContent";
import UserDetail from "../UserDetail";
import formatWorkData from "../../../Work/formatWorkValue";
import formatEducationData from "../../../Education/formatEducationData";
import formatCity from "../../../PlacesLived/formatCity";
import { StyledLink } from "../DetailsDisplay.styles";
import getPlatformUrl from "../../../SocialLinks/getPlatformUrl";
import getSocialLinkImage from "../../../SocialLinks/socialLinkImages";
import formatRelationshipStatus from "../../../RelationshipStatus/formatRelationshipStatus";

interface DetailsDisplayContentProps {
	user: IUser;
}

const DetailsDisplayContent = ({
	user: {
		intro: details,
		placesLived,
		relationshipStatus,
		namePronunciation,
		createdAt,
		websites,
		socialLinks,
		work,
		education,
		pronouns,
	},
}: DetailsDisplayContentProps) => {
	const { formattedJoined, hometown, currentCity } = useDetailsDisplayContent({
		joined: createdAt,
		placesLived,
	});

	return (
		<>
			{details.pronouns && pronouns && (
				<UserDetail
					icon={mdiCommentAccount}
					textComponent={<>Goes by {pronouns} pronouns</>}
				/>
			)}
			{details.work &&
				work &&
				Object.keys(details.work).map((key) => {
					const workData = work?.find((work) => work._id === key);
					return workData ? (
						<UserDetail
							key={key}
							icon={mdiBriefcase}
							textComponent={formatWorkData(workData)}
						/>
					) : null;
				})}
			{details.education &&
				education &&
				Object.keys(details.education).map((key) => {
					const educationData = education?.find((education) => education._id === key);
					return educationData ? (
						<UserDetail
							key={key}
							icon={mdiSchool}
							textComponent={formatEducationData(educationData)}
						/>
					) : null;
				})}
			{details.hometown && hometown && (
				<UserDetail
					icon={mdiMapMarker}
					textComponent={<>From {formatCity(hometown)}</>}
				/>
			)}
			{details.currentCity && currentCity && (
				<UserDetail
					icon={mdiHome}
					textComponent={<>Lives in {formatCity(currentCity)}</>}
				/>
			)}
			{details.relationshipStatus && relationshipStatus && (
				<UserDetail
					icon={mdiHeadHeart}
					textComponent={formatRelationshipStatus(relationshipStatus)}
				/>
			)}
			{details.namePronunciation && namePronunciation && (
				<UserDetail
					icon={mdiVolumeHigh}
					textComponent={<>{namePronunciation?.fullName}</>}
				/>
			)}
			{details.joined && createdAt && (
				<UserDetail icon={mdiClockTimeFour} textComponent={<>{formattedJoined}</>} />
			)}
			{details.websites &&
				websites &&
				websites?.map((website) => {
					return (
						<UserDetail
							key={website}
							icon={mdiWeb}
							textComponent={
								<StyledLink href={`${website}`} target="_blank" rel="noopener noreferrer">
									{website}
								</StyledLink>
							}
						/>
					);
				})}
			{details.socialLinks &&
				socialLinks &&
				socialLinks?.map(({ platform, username }) => {
					const url = getPlatformUrl(platform);
					return (
						<UserDetail
							key={`${platform}-${username}`}
							icon={getSocialLinkImage(platform)}
							textComponent={
								url ? (
									<StyledLink
										href={`https://${url}${username}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{username}
									</StyledLink>
								) : (
									username
								)
							}
						/>
					);
				})}
		</>
	);
};

export default DetailsDisplayContent;
