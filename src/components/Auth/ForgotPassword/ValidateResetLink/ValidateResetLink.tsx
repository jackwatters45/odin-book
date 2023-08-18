import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import Loading from "../../../Shared/Loading";
import { apiBaseUrl } from "../../../../../config/envVariables";

const fetchToken = async (token?: string) => {
	if (!token) throw new Error("Invalid link");

	const res = await fetch(`${apiBaseUrl}/auth/reset-password/link/${token}`);
	if (res.status === 302) return res.json();

	const { message } = await res.json();
	throw new Error(message);
};

const ValidateResetLink = () => {
	const { token } = useParams();
	const navigate = useNavigate();

	const { data, error } = useQuery({
		queryKey: ["validateToken", token],
		queryFn: () => fetchToken(token),
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
