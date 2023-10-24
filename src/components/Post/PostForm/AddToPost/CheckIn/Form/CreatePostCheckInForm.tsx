import { UseFormSetValue } from "react-hook-form";

import { StyledOtherFormContainer } from "../../../PostForm.styles";
import DialogHeader from "@/components/Shared/DialogHeader";
import StandardTextInput from "@/components/Shared/TextInput";
import { StandardButtonFullWidth } from "@/styles/SharedStyles";
import { StyledCheckInContainer } from "./CreatePostCheckinForm.styles";
import useCreatePostCheckInForm from "./useCreatePostCheckInForm";
import { CheckInValues } from "../types/CheckInTypes";
import { PostFormValues } from "../../../types/PostFormTypes";

interface CreatePostCheckInformProps {
	closeForm: () => void;
	currentValue: CheckInValues | undefined;
	setValue: UseFormSetValue<PostFormValues>;
}

const CreatePostCheckinForm = ({
	closeForm,
	setValue,
	currentValue,
}: CreatePostCheckInformProps) => {
	const { register, formValues, handleConfirm } = useCreatePostCheckInForm({
		setValue,
		closeForm,
		currentValue,
	});

	return (
		<StyledOtherFormContainer>
			<DialogHeader
				title={"Where are you now?"}
				closeDialog={closeForm}
				buttonActionType="back"
			/>
			<StyledCheckInContainer>
				<StandardTextInput
					category={"check-in-location"}
					isSelectedValue={!!formValues?.location}
					defaultValue={formValues?.location}
					register={{ ...register("location") }}
					labelText={"Location (optional)"}
				/>
				<StandardTextInput
					category={"check-in-city"}
					isSelectedValue={!!formValues?.city}
					defaultValue={formValues?.city}
					register={{ ...register("city") }}
					labelText={"City"}
				/>
				<StandardTextInput
					category={"check-in-state"}
					isSelectedValue={!!formValues?.state}
					defaultValue={formValues?.state}
					register={{ ...register("state") }}
					labelText={"State (optional)"}
				/>
				<StandardTextInput
					category={"check-in-country"}
					isSelectedValue={!!formValues?.country}
					defaultValue={formValues?.country}
					register={{ ...register("country") }}
					labelText={"Country (optional)"}
				/>
				<StandardButtonFullWidth text="Check in" onClick={handleConfirm} />
			</StyledCheckInContainer>
		</StyledOtherFormContainer>
	);
};

export default CreatePostCheckinForm;
