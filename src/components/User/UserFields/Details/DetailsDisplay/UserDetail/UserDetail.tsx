import { HTMLAttributes, ReactNode } from "react";
import { StyledDetail, StyledDetailText, StyledIcon } from "./UserDetail.styles";

interface UserDetailProps extends HTMLAttributes<HTMLDivElement> {
	icon: string;
	textComponent: ReactNode;
}

const UserDetail = ({ icon, textComponent, ...props }: UserDetailProps) => {
	return (
		<StyledDetail {...props}>
			<StyledIcon path={icon} size={1} color={"#65676B"} />
			<StyledDetailText>{textComponent}</StyledDetailText>
		</StyledDetail>
	);
};

export default UserDetail;
