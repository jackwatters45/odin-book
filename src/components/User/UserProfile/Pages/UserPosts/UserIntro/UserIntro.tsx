import { IUser } from "@/types/IUser";
import BioUserIntro from "./Sections/BioUserIntro";
import { IntroContainer } from "./UserIntro.styles";
import HobbiesUserIntro from "./Sections/HobbiesUserInfo";
import DetailsUserIntro from "./Sections/DetailsUserIntro";

interface UserIntroProps {
	user: IUser;
}

const UserIntro = ({ user }: UserIntroProps) => {
	const { bio, hobbies } = user;

	return (
		<IntroContainer>
			<h3>Intro</h3>
			<BioUserIntro bio={bio} />
			<HobbiesUserIntro hobbies={hobbies} />
			<DetailsUserIntro user={user} />
			{/* <IntroSection
				dataExists={!!featured}
				dataName="Featured"
				handleClickButton={() => {}}
			>
				Some Children
			</IntroSection> */}
		</IntroContainer>
	);
};

export default UserIntro;
