import Icon from "@mdi/react";

import { StyledAudienceStatusDiv } from "../AudienceStatus.styles.";
import useAudienceStatus from "../useAudienceStatus";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";

interface AudienceStatusTextProps {
	value: AudienceStatusOptions;
	text?: string;
	className?: string;
}

const AudienceStatusText = ({ value, text, className }: AudienceStatusTextProps) => {
	const { iconPath } = useAudienceStatus({ value });

	return (
		<StyledAudienceStatusDiv className={className}>
			<Icon path={iconPath} size={1.05} />
			<span>{text || value}</span>
		</StyledAudienceStatusDiv>
	);
};

export default AudienceStatusText;
