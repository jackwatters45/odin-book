import { IUser } from "@/types/IUser";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { ImageCircle } from "@/components/Nav/Nav.styles";
import {
	StyledLink,
	StyledRecoverUserPreviewContainer,
	StyledUserNameText,
} from "./RecoverUserPreview.styles";

interface RecoverUserPreviewProps {
	user: Partial<IUser>;
}

const RecoverUserPreview = ({ user }: RecoverUserPreviewProps) => {
	return (
		<StyledRecoverUserPreviewContainer>
			<ImageCircle
				src={user.avatarUrl || defaultUserAvatar}
				alt="User avatar"
				size={60}
			/>
			<div>
				<StyledUserNameText>{user.fullName}</StyledUserNameText>
				<StyledLink to="/login">Not you?</StyledLink>
			</div>
		</StyledRecoverUserPreviewContainer>
	);
};

export default RecoverUserPreview;
