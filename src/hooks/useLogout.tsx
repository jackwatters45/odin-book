import { useNavigate } from "react-router-dom";
import useMutateCustom from "./reactQuery/useMutateCustom";
import socket from "@/config/socket";

const useLogout = () => {
	const navigate = useNavigate();

	const { mutate } = useMutateCustom({
		queryKey: ["currentUser"],
		queryUrl: "auth/logout",
		method: "POST",
		successNavigate: "/login",
	});

	const logout = () => mutate({});

	const handleClickLogout = () => {
		console.log("logout");
		navigate("/login");
		logout();
		socket.disconnect();
	};

	return { logout, handleClickLogout };
};

export default useLogout;
