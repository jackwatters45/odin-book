import { mdiAccount, mdiCakeVariant, mdiComment, mdiThumbUp } from "@mdi/js";

import { NotificationType } from "@/components/Notifications/types/NotificationType";

interface getNotificationTypeIconReturn {
	typeIcon: string;
	IconBackgroundColor: string;
}

const getNotificationTypeIcon = (
	type: NotificationType,
): getNotificationTypeIconReturn => {
	switch (type) {
		case "request received":
			return { typeIcon: mdiAccount, IconBackgroundColor: "#6b7280" };
		case "request accepted":
			return { typeIcon: mdiAccount, IconBackgroundColor: "#6b7280" };
		case "comment":
			return { typeIcon: mdiComment, IconBackgroundColor: "#22c55e" };
		case "reaction":
			return { typeIcon: mdiThumbUp, IconBackgroundColor: "#1b74e4" };
		case "birthday":
			return { typeIcon: mdiCakeVariant, IconBackgroundColor: "#ec4899" };
	}
};

export default getNotificationTypeIcon;
