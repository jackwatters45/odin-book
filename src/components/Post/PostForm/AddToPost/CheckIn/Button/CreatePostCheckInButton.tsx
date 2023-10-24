import { mdiMapMarker } from "@mdi/js";

import CreatePostAddButton from "../../Shared/Button/CreatePostAddButton";
import { CheckInValues } from "../types/CheckInTypes";
import allPropertiesEmpty from "@/utils/other/allPropertiesEmpty";

interface CreatePostCheckInButtonProps {
	openForm: () => void;
	currentValue: CheckInValues | undefined;
}

const CreatePostCheckInButton = ({
	openForm,
	currentValue,
}: CreatePostCheckInButtonProps) => {
	return (
		<CreatePostAddButton
			title="Check In"
			openForm={openForm}
			iconProps={{ path: mdiMapMarker, size: 1.2, color: "#ef4444" }}
			isValue={!allPropertiesEmpty(currentValue)}
			activeColor="#FBCCD2"
		/>
	);
};

export default CreatePostCheckInButton;
