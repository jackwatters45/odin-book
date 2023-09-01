import useBottomControls from "./useBottomControls";
import PrivacyStatus from "@/components/Shared/PrivacyStatus";
import { BottomDiv } from "../../../EditProfile.styles";
import { StyledButtonDiv } from "@/styles/SharedStyles";
import { StyledCancelButton, StyledSaveButton } from "./BottomControls.styles";

interface BottomControlsProps {
	initialHobbies: string[] | undefined;
	hobbiesValue: string[];
	handleCancel: () => void;
	closeDialog: () => void;
}

const BottomControls = ({
	initialHobbies,
	hobbiesValue,
	handleCancel,
	closeDialog,
}: BottomControlsProps) => {
	const { isChanged, handleSaveHobbies } = useBottomControls({
		closeDialog,
		hobbiesValue,
		initialHobbies,
	});

	return (
		<BottomDiv $border={true}>
			<PrivacyStatus status="Public" text="Hobbies are Public" />
			{isChanged && (
				<StyledButtonDiv>
					<StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
					<StyledSaveButton onClick={handleSaveHobbies}>Save</StyledSaveButton>
				</StyledButtonDiv>
			)}
		</BottomDiv>
	);
};

export default BottomControls;
