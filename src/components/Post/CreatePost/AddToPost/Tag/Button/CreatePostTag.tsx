import { mdiAccountTag } from "@mdi/js";

import CreatePostAddButton from "../../Shared/Button/CreatePostAddButton";
import { TaggedUserType } from "../Form/types/TagTypes";

interface CreatePostTagProps {
	openForm: () => void;
	currentValue: TaggedUserType[];
}
const CreatePostTag = ({ openForm, currentValue }: CreatePostTagProps) => {
	return (
		<CreatePostAddButton
			title="Tag people"
			openForm={openForm}
			iconProps={{ path: mdiAccountTag, size: 1.3, color: "#3b82f6" }}
			isValue={!!currentValue.length}
			activeColor="#CAEEF9"
		/>
	);
};

export default CreatePostTag;
