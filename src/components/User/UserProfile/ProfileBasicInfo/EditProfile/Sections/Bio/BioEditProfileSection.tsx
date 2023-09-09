import { ContentDiv } from "../../EditProfile.styles";
import EditProfileSectionHeader from "../../EditProfileSectionHeader";
import EditFormBio from "../../../../../UserFields/Bio/EditBioForm";
import useToggledState from "@/hooks/useToggledState";

interface BioEditProfileSectionProps {
	bio: string | undefined;
}

const BioEditProfileSection = ({ bio }: BioEditProfileSectionProps) => {
	const [isEditing, handleToggleForm] = useToggledState();

	return (
		<ContentDiv>
			<EditProfileSectionHeader
				title="Bio"
				isData={!!bio}
				openDialog={handleToggleForm}
			/>
			<div>
				{isEditing ? (
					<EditFormBio data={bio} handleCloseForm={handleToggleForm} />
				) : (
					<p>{bio || "Describe yourself..."}</p>
				)}
			</div>
		</ContentDiv>
	);
};

export default BioEditProfileSection;
