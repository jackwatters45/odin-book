import { StyledButtonDiv } from "@/styles/SharedStyles";
import StandardButton from "@/components/Shared/StandardButton";
import PrivacyStatus from "@/components/Shared/AudienceStatus";
import useEditFormBio from "./useEditFormBio";
import {
	StyledBottomRow,
	StyledCharCount,
	StyledTextArea,
	StyledTextAreaContainer,
} from "./EditBioForm.styles";

interface EditBioFormProps {
	handleCloseForm: () => void;
	data: string | undefined;
	className?: string;
}

const EditBioForm = ({ handleCloseForm, data, className }: EditBioFormProps) => {
	const { handleSaveBio, register, bioLengthRemaining, bioInput } = useEditFormBio({
		handleCloseForm,
	});

	return (
		<StyledTextAreaContainer className={className}>
			<div>
				<StyledTextArea
					{...register("bio", { required: true })}
					placeholder="Describe who you are"
					defaultValue={data}
				/>
			</div>
			<StyledCharCount>{bioLengthRemaining} characters remaining</StyledCharCount>
			{/* TODO -> dialog actions */}
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
