import EditBioForm from "@/components/User/UserFields/Bio/EditBioForm";
import useToggledState from "@/hooks/useToggledState";
import IntroSection from "../../../UserProfile/Pages/UserPosts/UserIntro/IntroSection";

interface IntroBioProps {
	bio: string | undefined;
}

const IntroBio = ({ bio }: IntroBioProps) => {
	const [isEditing, toggleIsEditing] = useToggledState();

	return (
		<IntroSection dataExists={!!bio} dataName="Bio" handleClickButton={toggleIsEditing}>
			{isEditing ? (
				<EditBioForm
					data={bio}
					handleCloseForm={toggleIsEditing}
					className="full-width"
				/>
			) : (
				<div>{bio}</div>
			)}
		</IntroSection>
	);
};

export default IntroBio;
