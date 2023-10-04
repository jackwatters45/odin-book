import { IUser } from "@/types/IUser";
import BioUserIntro from "../../../../UserFields/Bio/Intro/IntroBio";
import HobbiesUserIntro from "../../../../UserFields/Hobbies/Intro/IntroHobbies";
import DetailsUserIntro from "../../../../UserFields/Details/Intro/IntroDetails";

import UserProfileSection from "@/components/Shared/UserProfileSection";

interface UserIntroProps {
	user: IUser;
}

const UserIntro = ({ user }: UserIntroProps) => {
	const { bio, hobbies } = user;

	return (
		<UserProfileSection title="Intro">
			<BioUserIntro bio={bio} />
			<HobbiesUserIntro hobbies={hobbies} />
			<DetailsUserIntro user={user} />
		</UserProfileSection>
	);
};

export default UserIntro;
