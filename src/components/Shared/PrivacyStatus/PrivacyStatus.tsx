import Icon from "@mdi/react";
import { StyledPublicIndicator } from "./PrivacyStatus.styles";
import { mdiEarth, mdiLock } from "@mdi/js";

interface PrivacyStatusProps {
	status: "Public" | "Private" | "Hidden";
	text?: string;
}

const PrivacyStatus = ({ status, text }: PrivacyStatusProps) => {
	const iconPath = status === "Public" ? mdiEarth : mdiLock;
	return (
		<StyledPublicIndicator>
			<Icon path={iconPath} size={1.05} />
			<span>{text || status}</span>
		</StyledPublicIndicator>
	);
};

export default PrivacyStatus;
