import { ContentDiv } from "../../EditProfile.styles";
import useBioEditProfileSection from "./useBioEditProfileSection";
import PrivacyStatus from "@/components/Shared/PrivacyStatus";
import { StyledButtonDiv } from "@/styles/SharedStyles";
import {
	StyledBottomRow,
	StyledButton,
	StyledCharCount,
	StyledTextArea,
	StyledTextAreaContainer,
} from "./BioEditProfileSection.styles";
import EditProfileSectionHeader from "../../EditProfileSectionHeader";

interface BioEditProfileSectionProps {
	bio?: string;
}

const BioEditProfileSection = ({ bio }: BioEditProfileSectionProps) => {
	const {
		isEditing,
		handleClickButton,
		handleSaveBio,
		register,
		bioLengthRemaining,
		bioInput,
	} = useBioEditProfileSection();

	return (
		<ContentDiv>
			<EditProfileSectionHeader
				title="Bio"
				isData={!!bio}
				openDialog={handleClickButton}
			/>
			<div>
				{isEditing ? (
					<StyledTextAreaContainer>
						<div>
							<StyledTextArea
								{...register("bio", { required: true })}
								placeholder="Describe who you are"
								defaultValue={bio}
							/>
						</div>
						<StyledCharCount>{bioLengthRemaining} characters remaining</StyledCharCount>
						<StyledBottomRow>
							<PrivacyStatus status="Public" />
							<StyledButtonDiv>
								<StyledButton onClick={handleClickButton}>Cancel</StyledButton>
								<StyledButton onClick={handleSaveBio} disabled={!bioInput}>
									Save
								</StyledButton>
							</StyledButtonDiv>
						</StyledBottomRow>
					</StyledTextAreaContainer>
				) : (
					<p>{bio || "Describe yourself..."}</p>
				)}
			</div>
		</ContentDiv>
	);
};

export default BioEditProfileSection;
