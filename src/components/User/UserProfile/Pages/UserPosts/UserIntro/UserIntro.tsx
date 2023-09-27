import { IUser } from "@/types/IUser";
import BioUserIntro from "./Sections/BioUserIntro";
import HobbiesUserIntro from "./Sections/HobbiesUserInfo";
import DetailsUserIntro from "./Sections/DetailsUserIntro";
import FeaturedUserIntro from "./Sections/FeaturedUserIntro";
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
			<FeaturedUserIntro featured={[]} />
		</UserProfileSection>
	);
};

export default UserIntro;
