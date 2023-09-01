import { ContentDiv } from "../../EditProfile.styles";
import EditProfileSectionHeader from "../../EditProfileSectionHeader";

interface IntroEditProfileSectionProps {
	intro?: any;
}
const IntroEditProfileSection = ({ intro }: IntroEditProfileSectionProps) => {
	/* TODO do this once other pages done since it just allows you to choose which about data to display */

	return (
		<ContentDiv>
			<EditProfileSectionHeader
				title="Intro"
				isData={!!intro}
				openDialog={() => {
					console.log("open dialog");
				}}
			/>
			<div>
				<p>user.intro || Add a short intro to your profile...</p>
			</div>
		</ContentDiv>
	);
};

export default IntroEditProfileSection;
