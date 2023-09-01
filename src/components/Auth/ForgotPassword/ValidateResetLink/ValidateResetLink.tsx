import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import Loading from "../../../Shared/Loading";
import useQueryCustom from "@/hooks/useQueryCustom";

const ValidateResetLink = () => {
	const { token } = useParams<{ token: string }>();

	const navigate = useNavigate();
	if (!token) {
		navigate("/recover", { state: { data: { linkError: "Invalid link" } } });
	}

	const { data, error } = useQueryCustom({
		queryKey: ["validateToken", token],
		queryUrl: `auth/reset-password/link/${token}`,
	});

	useEffect(() => {
		if (data) {
			navigate("/recover/password", { state: { data: { token } } });
		} else if (error) {
			navigate("/recover", { state: { data: { linkError: error } } });
		}
	}, [data, error, navigate, token]);

	return <Loading />;
};

export default ValidateResetLink;
