import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import { apiBaseUrl } from "../../config/envVariables";
import { useNavigate } from "react-router";
import { FormError, ValidationError } from "../../types/ErrorInterfaces";

interface useMutateForm {
	queryUrl: string;
	method: "POST" | "PUT" | "DELETE" | "GET";
	successNavigate?: string;
	queryKey?: string;
	includeCredentials?: boolean;
	onError?: (err: SetStateAction<string | ValidationError[]>) => void;
}

interface MutationFnInputs<T> {
	data?: T;
	params?: string;
}

const useMutateForm = <T,>({
	queryUrl,
	method,
	successNavigate = "/",
	queryKey,
	includeCredentials = false,
	onError,
}: useMutateForm) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const [formServerError, setFormServerError] = useState<string | ValidationError[]>("");

	const { mutate } = useMutation({
		mutationFn: async ({ data, params }: MutationFnInputs<T>) => {
			const fullQuery = params ? `${queryUrl}/${params}` : queryUrl;

			const res = await fetch(`${apiBaseUrl}/${fullQuery}`, {
				method,
				headers: { "Content-Type": "application/json" },
				body: data ? JSON.stringify(data) : undefined,
				credentials: includeCredentials ? "include" : "omit",
			});

			const json = await res.json();
			if (!(res.ok || res.status === 302)) throw json;
			return json;
		},
		onSuccess: (data) => {
			if (queryKey) queryClient.setQueryData([queryKey], data);
			navigate(successNavigate, { state: { data } });
		},
		onError: (err: FormError) => {
			// TODO might need some work depending on the error
			if (onError) return onError(err.errors || err.message || "");
			setFormServerError(err.message || err.errors || "");
		},
	});

	return { mutate, formServerError, setFormServerError };
};

export default useMutateForm;
