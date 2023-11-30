import { StyledMarkAsReadDot } from "./MarkAsReadDot.styles";
import useMarkAsReadDot from "./useMarkAsReadDot";

interface MarkAsReadDotProps {
	notificationId: string;
	isRead: boolean;
}

const MarkAsReadDot = ({ notificationId, isRead }: MarkAsReadDotProps) => {
	const { handleClickMarkAsRead } = useMarkAsReadDot(notificationId);

	return (
		<StyledMarkAsReadDot
			onClick={handleClickMarkAsRead}
			style={{ visibility: isRead ? "hidden" : "visible" }}
		/>
	);
};

export default MarkAsReadDot;
