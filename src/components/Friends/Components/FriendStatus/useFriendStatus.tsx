import { useEffect, useState } from "react";

interface useFriendStatusProps {
	requestSent: boolean;
	requestReceived: boolean;
	isFriend: boolean;
}

const useFriendStatus = ({
	requestSent,
	requestReceived,
	isFriend,
}: useFriendStatusProps) => {
	const [isUserFriend, setIsUserFriend] = useState(isFriend);
	const toggleIsUserFriend = () => setIsUserFriend((prev) => !prev);

	const [isRequestSent, setIsRequestSent] = useState(requestSent);
	const toggleIsRequestSent = () => setIsRequestSent((prev) => !prev);

	const [isRequestReceived, setIsRequestReceived] = useState(requestReceived);
	const toggleIsRequestReceived = () => setIsRequestReceived((prev) => !prev);

	useEffect(() => {
		setIsUserFriend(isFriend);
	}, [isFriend]);

	useEffect(() => {
		setIsRequestSent(requestSent);
	}, [requestSent]);

	useEffect(() => {
		setIsRequestReceived(requestReceived);
	}, [requestReceived]);

	return {
		isUserFriend,
		isRequestSent,
		isRequestReceived,
		toggleIsUserFriend,
		toggleIsRequestSent,
		toggleIsRequestReceived,
	};
};

export default useFriendStatus;
