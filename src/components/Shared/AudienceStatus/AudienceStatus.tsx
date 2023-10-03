import Icon from "@mdi/react";

import { StyledAudienceStatusDiv } from "./AudienceStatus.styles.";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import getAudienceIcon from "@/utils/audience/getAudienceIcon";
import { HTMLAttributes } from "react";

interface AudienceStatusTextProps extends HTMLAttributes<HTMLDivElement> {
	value: AudienceStatusOptions;
	text?: string;
	className?: string;
}

const AudienceStatusText = ({
	value,
	text,
	className,
	...props
}: AudienceStatusTextProps) => {
	return (
		<StyledAudienceStatusDiv className={className} {...props}>
			<Icon path={getAudienceIcon(value)} size={1.05} />
			<span>{text || value}</span>
		</StyledAudienceStatusDiv>
	);
};

export default AudienceStatusText;
