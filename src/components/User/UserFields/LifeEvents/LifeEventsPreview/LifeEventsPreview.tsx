import UserProfileSectionWithLink from "@/components/Shared/UserProfileSection/UserProfileSectionWithLink";
import LifeEventDisplay from "../LifeEventDisplay";
import useLifeEvents from "@/components/User/UserFields/LifeEvents/useLifeEvents";

const LifeEventsPreview = () => {
	const { userId, lifeEvents } = useLifeEvents();

	return (
		<UserProfileSectionWithLink
			title="Life Events"
			seeAllLink={{
				to: `/user/${userId}/about?section=year-overviews`,
				text: "See all",
			}}
		>
			<LifeEventDisplay lifeEvents={lifeEvents} />
		</UserProfileSectionWithLink>
	);
};

export default LifeEventsPreview;
