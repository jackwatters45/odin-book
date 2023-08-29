import { useNavigate } from "react-router-dom";
import useMutateCustom from "./useMutateCustom";

// TODO move this to a more appropriate location
const useLogout = () => {
	const navigate = useNavigate();

	const { mutate } = useMutateCustom({
		queryKey: "currentUser",
		queryUrl: "auth/logout",
		method: "POST",
		excludeData: true,
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
