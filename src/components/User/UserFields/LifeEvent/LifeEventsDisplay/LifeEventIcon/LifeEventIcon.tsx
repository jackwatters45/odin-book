import Icon from "@mdi/react";

import { StyledIcon } from "./LifeEventIcon.styles";

interface LifeEventIconProps {
	iconPath: string;
	text: string;
}

const LifeEventIcon = ({ iconPath, text }: LifeEventIconProps) => {
	return (
		<StyledIcon>
			<Icon path={iconPath} size={1.5} />
			<span>{text}</span>
		</StyledIcon>
	);
};

export default LifeEventIcon;
