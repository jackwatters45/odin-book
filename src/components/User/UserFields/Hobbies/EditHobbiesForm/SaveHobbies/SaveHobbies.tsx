import PrivacyStatus from "@/components/Shared/AudienceStatus";
import useSaveHobbies from "./useSaveHobbies";
import DialogActions from "@/components/Shared/Dialog/DialogActions/DialogActions";

interface SaveHobbiesProps {
	closeDialog: () => void;
	initial: string[] | undefined;
	unsavedValue: string[];
}

const SaveHobbies = ({ closeDialog, initial, unsavedValue }: SaveHobbiesProps) => {
	const { handleSave } = useSaveHobbies({ closeDialog, unsavedValue });

	return (
		<DialogActions
			initial={initial}
			handleCancel={closeDialog}
			unsavedValue={unsavedValue}
			handleSave={handleSave}
			unchangedBehavior="hide"
			leftColumn={<PrivacyStatus value="Public" text="Hobbies are Public" />}
		/>
	);
};

export default SaveHobbies;
