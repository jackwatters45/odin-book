import StandardButton from "@/components/Shared/StandardButton";
import { FC } from "react";

const RespondButton: FC<{ onClick: (() => void) | undefined }> = ({ onClick }) => (
	<StandardButton colorClass="light-blue" text="Respond" onClick={onClick} />
);

export default RespondButton;
