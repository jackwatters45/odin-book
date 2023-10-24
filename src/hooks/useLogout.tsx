import { useNavigate } from "react-router-dom";
import useMutateCustom from "./reactQuery/useMutateCustom";

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
		logout();
		navigate("/login");
	};

	return { logout, handleClickLogout };
};

export default useLogout;
