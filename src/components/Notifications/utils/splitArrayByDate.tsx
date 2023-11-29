import { INotification } from "../types/NotificationType";

const splitArrayByDate = (array: INotification[]): [INotification[], INotification[]] => {
	const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
	const last24Hours: INotification[] = [];
	const olderThan24Hours: INotification[] = [];

	array.forEach((item) => {
		if (new Date(item.createdAt) > twentyFourHoursAgo) {
			last24Hours.push(item);
		} else {
			olderThan24Hours.push(item);
		}
	});

	return [last24Hours, olderThan24Hours];
};

export default splitArrayByDate;
