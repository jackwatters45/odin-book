import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { apiBaseUrl } from "../../config/envVariables";
import { useNavigate } from "react-router";

export interface ValidationError {
	type: string;
	value: string;
	msg: string;
	path: string;
	location: string;
}

export interface FormError {
	message?: string;
	errors?: ValidationError[];
}

interface useMutateCustom {
	queryKey: string;
	queryUrl: string;
	method: "POST" | "PUT";
	successNavigate?: string;
}

const useMutateCustom = <T,>({
	queryUrl,
	queryKey,
	method,
	successNavigate = "/",
}: useMutateCustom) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const [formServerError, setFormServerError] = useState<string | ValidationError[]>("");

	const { mutate } = useMutation({
		mutationFn: async (data: T) => {
			const res = await fetch(`${apiBaseUrl}/${queryUrl}`, {
				method: method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const json = await res.json();
			if (!res.ok) throw json;
			return json;
		},
		onSuccess: (data) => {
			queryClient.setQueryData([queryKey], data);
			navigate(successNavigate);
		},
		onError: (err: FormError) => {
			setFormServerError(err.message || err.errors || "");
		},
	});

	return { mutate, formServerError, setFormServerError };
};

export default useMutateCustom;
