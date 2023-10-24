import { mdiAccountMultiple, mdiEarth, mdiLock } from "@mdi/js";

import DialogActions from "@/components/Shared/DialogActions";
import DialogHeader from "@/components/Shared/DialogHeader";
import RadioFormDialogContent from "@/components/Shared/RadioForm/DialogContent/RadioFormDialogContent";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { AudienceFormValues } from "./types/EditAudienceTypes";
import { Dispatch, FormEvent, SetStateAction } from "react";

interface PostMoreOptionsAudienceFormProps {
	initial: AudienceStatusOptions;
	handleCancel: () => void;
	handleConfirm: () => void;
	popupValue: AudienceStatusOptions | undefined;
	setPopupValue: Dispatch<SetStateAction<AudienceStatusOptions | undefined>>;
	submitForm: (e: FormEvent<HTMLFormElement>) => void;
}

const PostMoreOptionsAudienceForm = ({
	initial,
	handleCancel,
	handleConfirm,
	popupValue,
	setPopupValue,
	submitForm,
}: PostMoreOptionsAudienceFormProps) => {
	return (
		<form onSubmit={submitForm}>
			<DialogHeader title={"Select Audience"} closeDialog={handleCancel} />
			<RadioFormDialogContent<AudienceFormValues>
				options={[
					{
						title: "Public",
						value: "Public",
						icon: mdiEarth,
						subtitle: "Anyone on or off Odinbook",
					},
					{
						title: "Friends",
						value: "Friends",
						icon: mdiAccountMultiple,
						subtitle: "Your friends on Odinbook",
					},
					{
						title: "Only Me",
						value: "Only Me",
						icon: mdiLock,
						subtitle: "Only you",
					},
				]}
				formField={"audience"}
				popupValue={popupValue}
				setPopupValue={setPopupValue}
			/>
			<DialogActions
				initial={initial}
				unsavedValue={popupValue}
				handleCancel={handleCancel}
				handleSave={handleConfirm}
				submitsForm={true}
				submitButtonText={"Done"}
			/>
		</form>
	);
};

export default PostMoreOptionsAudienceForm;
