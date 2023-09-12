import UserProfileSection from "@/components/Shared/UserProfileSection";
import { useParams } from "react-router";

const UserLifeEvents = () => {
	const { id: userId } = useParams<{ id: string }>();

	return (
		<UserProfileSection
			title="Life Events"
			seeAllLink={{
				to: `/user/${userId}/life-events`,
				text: "See all",
			}}
		>
			<p>Life events</p>
		</UserProfileSection>
	);
};

export default UserLifeEvents;
