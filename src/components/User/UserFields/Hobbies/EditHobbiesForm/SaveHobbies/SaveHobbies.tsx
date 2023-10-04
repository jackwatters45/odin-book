import PrivacyStatus from "@/components/Shared/AudienceStatusText";
import useSaveHobbies from "./useSaveHobbies";
import DialogActions from "@/components/Shared/DialogActions/DialogActions";

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
