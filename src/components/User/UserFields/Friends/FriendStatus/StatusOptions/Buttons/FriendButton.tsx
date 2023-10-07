import { mdiAccountCheck } from "@mdi/js";
import { FC } from "react";

import StandardButton from "@/components/Shared/StandardButton";

const FriendButton: FC<{ onClick: (() => void) | undefined }> = ({ onClick }) => (
	<StandardButton
		colorClass="standard"
		icon={mdiAccountCheck}
		text="Friends"
		onClick={onClick}
	/>
);

export default FriendButton;
