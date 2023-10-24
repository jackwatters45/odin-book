import { mdiEmoticonOutline } from "@mdi/js";

import CreatePostAddButton from "../../Shared/Button";

interface CreatePostFeelingButtonProps {
	openForm: () => void;
	currentValue: string | undefined;
}

const CreatePostFeelingButton = ({
	openForm,
	currentValue,
}: CreatePostFeelingButtonProps) => {
	return (
		<CreatePostAddButton
			title="Feeling"
			openForm={openForm}
			iconProps={{ path: mdiEmoticonOutline, size: 1.3, color: "#eab308" }}
			isValue={!!currentValue}
			activeColor="#FEF2D1"
		/>
	);
};

export default CreatePostFeelingButton;
