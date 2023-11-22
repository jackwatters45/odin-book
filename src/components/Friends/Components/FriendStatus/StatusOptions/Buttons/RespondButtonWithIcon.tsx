import StandardButton from "@/components/Shared/StandardButton";
import { mdiAccountCheck } from "@mdi/js";
import { FC } from "react";

const RespondButtonWithIcon: FC<{ onClick: (() => void) | undefined }> = ({
	onClick,
}) => (
	<StandardButton
		colorClass="blue"
		text="Respond"
		onClick={onClick}
		icon={mdiAccountCheck}
	/>
);

export default RespondButtonWithIcon;
