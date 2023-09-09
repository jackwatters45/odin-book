import { ReactNode } from "react";
import Icon from "@mdi/react";

import { StyledDetail, StyledDetailText } from "./UserDetail.styles";

interface UserDetailProps {
	icon: string;
	textComponent: ReactNode;
}
const UserDetail = ({ icon, textComponent }: UserDetailProps) => {
	return (
		<StyledDetail>
			<Icon path={icon} size={1} color={"#65676B"} />
			<StyledDetailText>{textComponent}</StyledDetailText>
		</StyledDetail>
	);
};

export default UserDetail;
