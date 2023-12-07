import useRenderTitleSegments from "@/utils/render/titleSegment/useRenderTitleSegments";
import { INotification } from "../../types/NotificationType";
import getNotificationTitleSegments from "./utils/getNotificationTitleSegments";

interface UseNotificationItemTextParams {
	notification: INotification;
}
const useNotificationItemText = ({
	notification: { from, type, contentType },
}: UseNotificationItemTextParams) => {
	const title = getNotificationTitleSegments(type, from, contentType);

	const renderTitleSegments = useRenderTitleSegments();

	return {
		title,
		renderTitleSegments,
	};
};

export default useNotificationItemText;
