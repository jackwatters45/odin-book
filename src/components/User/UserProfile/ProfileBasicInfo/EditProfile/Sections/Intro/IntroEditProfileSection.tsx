import { ContentDiv } from "../../EditProfile.styles";

interface IntroEditProfileSectionProps {
	intro?: any;
}
const IntroEditProfileSection = ({ intro }: IntroEditProfileSectionProps) => {
	/* TODO do this once other pages done since it just allows you to choose which about data to display */

	return (
		<ContentDiv>
			<div>
				<h2>Customize your intro</h2>
				<button>{intro ? "Edit" : "Add"}</button>
			</div>
			<div>
				<p>user.intro || Add a short intro to your profile...</p>
			</div>
		</ContentDiv>
	);
};

export default IntroEditProfileSection;
