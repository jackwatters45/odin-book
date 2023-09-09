import EditBioForm from "@/components/User/UserFields/Bio/EditBioForm";
import useToggledState from "@/hooks/useToggledState";
import IntroSection from "../IntroSection";

interface BioUserIntroProps {
	bio: string | undefined;
}

const BioUserIntro = ({ bio }: BioUserIntroProps) => {
	const [isEditing, toggleIsEditing] = useToggledState();

	return (
		<IntroSection dataExists={!!bio} dataName="Bio" handleClickButton={toggleIsEditing}>
			{isEditing ? (
				<EditBioForm data={bio} handleCloseForm={toggleIsEditing} />
			) : (
				<div>{bio}</div>
			)}
		</IntroSection>
	);
};

export default BioUserIntro;
