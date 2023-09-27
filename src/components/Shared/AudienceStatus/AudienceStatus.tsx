import Icon from "@mdi/react";

import { StyledAudienceStatusDiv } from "./AudienceStatus.styles.";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import getAudienceIcon from "@/utils/audience/getAudienceIcon";

interface AudienceStatusTextProps {
	value: AudienceStatusOptions;
	text?: string;
	className?: string;
}

const AudienceStatusText = ({ value, text, className }: AudienceStatusTextProps) => {
	return (
		<StyledAudienceStatusDiv className={className}>
			<Icon path={getAudienceIcon(value)} size={1.05} />
			<span>{text || value}</span>
		</StyledAudienceStatusDiv>
	);
};

export default AudienceStatusText;
