import { StyledButtonDiv } from "@/styles/SharedStyles";
import PrivacyStatus from "@/components/Shared/AudienceStatus/Text";
import useEditFormBio from "./useEditFormBio";
import {
	StyledBottomRow,
	StyledButton,
	StyledCharCount,
	StyledTextArea,
	StyledTextAreaContainer,
} from "./EditBioForm.styles";

interface EditBioFormProps {
	handleCloseForm: () => void;
	data: string | undefined;
}

const EditBioForm = ({ handleCloseForm, data }: EditBioFormProps) => {
	const { handleSaveBio, register, bioLengthRemaining, bioInput } = useEditFormBio({
		handleCloseForm,
	});

	return (
		<StyledTextAreaContainer>
			<div>
				<StyledTextArea
					{...register("bio", { required: true })}
					placeholder="Describe who you are"
					defaultValue={data}
				/>
			</div>
			<StyledCharCount>{bioLengthRemaining} characters remaining</StyledCharCount>
			<StyledBottomRow>
				<PrivacyStatus value="Public" />
				<StyledButtonDiv>
					<StyledButton onClick={handleCloseForm}>Cancel</StyledButton>
					<StyledButton onClick={handleSaveBio} disabled={!bioInput}>
						Save
					</StyledButton>
				</StyledButtonDiv>
			</StyledBottomRow>
		</StyledTextAreaContainer>
	);
};

export default EditBioForm;
