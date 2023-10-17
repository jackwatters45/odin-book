import { ContentDiv } from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfile.styles";
import EditProfileSectionHeader from "../../../UserProfile/ProfileBasicInfo/EditProfile/EditProfileSectionHeader";
import EditFormBio from "../EditBioForm";
import useToggledState from "@/hooks/useToggledState";

interface EditProfileBioProps {
	bio: string | undefined;
}

const EditProfileBio = ({ bio }: EditProfileBioProps) => {
	const [isEditing, handleToggleForm] = useToggledState({});

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

export default EditProfileBio;
