import useQueryCustom from "../reactQuery/useQueryCustom";
import { IUser } from "../../types/IUser";
import socket from "../../config/socket";
import { useEffect } from "react";

type JsonResponse = {
	isAuthenticated: boolean;
	user: IUser | null;
};

type FnReturnType = IUser | null;

const useCurrentUser = () => {
	const { data, error, isLoading, isError, isSuccess } = useQueryCustom<
		JsonResponse,
		FnReturnType
	>({
		queryKey: ["currentUser"],
		queryUrl: "auth/current-user",
		allowErrors: true,
		transformData: ({ isAuthenticated, user }) => {
			return isAuthenticated ? user : null;
		},
	});

	useEffect(() => {
		if (!data) return;
		socket.connect();
		socket.emit("register", data?._id);
	});

	return { currentUser: data, error, isLoading, isError, isSuccess };
};

export default useCurrentUser;
