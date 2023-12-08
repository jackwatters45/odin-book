import { StyledButtonDiv } from "@/styles/SharedStyles";
import StandardButton from "@/components/Shared/StandardButton";
import PrivacyStatus from "@/components/Shared/AudienceStatusText";
import useEditFormBio from "./useEditFormBio";
import {
	StyledBottomRow,
	StyledCharCount,
	StyledTextArea,
	StyledTextAreaContainer,
} from "./EditBioForm.styles";

interface EditBioFormProps {
	handleCloseForm: () => void;
	initialValue: string | undefined;
	className?: string;
}

const EditBioForm = ({ handleCloseForm, initialValue, className }: EditBioFormProps) => {
	const { handleSaveBio, register, bioLengthRemaining, bioInput } = useEditFormBio({
		handleCloseForm,
		initialValue,
	});

	return (
		<StyledTextAreaContainer className={className}>
			<div>
				<StyledTextArea
					{...register("bio", { required: true })}
					placeholder="Describe who you are"
					defaultValue={initialValue}
				/>
			</div>
			<StyledCharCount>{bioLengthRemaining} characters remaining</StyledCharCount>
			<StyledBottomRow>
				<PrivacyStatus value="Public" />
				<StyledButtonDiv>
					<StandardButton text="Cancel" onClick={handleCloseForm} />
					<StandardButton text="Save" onClick={handleSaveBio} disabled={!bioInput} />
				</StyledButtonDiv>
			</StyledBottomRow>
		</StyledTextAreaContainer>
	);
};

export default EditBioForm;
