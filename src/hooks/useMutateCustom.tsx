import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";

import { apiBaseUrl } from "../config/envVariables";
import { FormError, ResponseError } from "../types/ErrorInterfaces";
import useError from "@/components/Errors/useError";

export interface useMutateFormProps {
	queryUrl: string;
	method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
	successNavigate?: string;
	queryKey?: string[];
	updateDataKey?: string;
	includeCredentials?: boolean;
	headers?: HeadersInit;
	onError?: Dispatch<SetStateAction<FormError>>;
}

export interface MutationFnInputs<T> {
	data?: T;
	params?: string;
}

const useMutateCustom = <T,>({
	queryUrl,
	method,
	successNavigate,
	queryKey,
	updateDataKey,
	includeCredentials = true,
	headers,
	onError,
}: useMutateFormProps) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { setError } = useError();

	const { mutate, error, isSuccess, isLoading, isError } = useMutation({
		mutationFn: async ({ data, params }: MutationFnInputs<T>) => {
			const fullQuery = params ? `${queryUrl}/${params}` : queryUrl;
			const res = await fetch(`${apiBaseUrl}/${fullQuery}`, {
				method,
				headers:
					data instanceof FormData
						? {}
						: { "Content-Type": "application/json", ...headers },
				body: data instanceof FormData ? data : JSON.stringify(data),
				credentials: includeCredentials ? "include" : "omit",
			});

			const json = await res.json();
			if (!(res.ok || res.status === 302)) throw json;
			return json;
		},
		onSuccess: (data) => {
			if (queryKey) {
				console.log("queryKey", queryKey, "updateDataKey", updateDataKey);
				if (!updateDataKey) return queryClient.resetQueries(queryKey);
				console.log("data", data, "data[updateDataKey]", data[updateDataKey]);
				queryClient.setQueryData(queryKey, data[updateDataKey]);
			}

			if (successNavigate) navigate(successNavigate, { state: { data } });
		},
		onError: (err: ResponseError) => {
			let error: FormError | string = "";

			if (err?.message) error = err.message;
			else if (err?.errors) error = err.errors;
			else error = "An unexpected error has occurred.";

			return onError ? onError(error) : setError(error);
		},
	});

	return { mutate, error, isSuccess, isLoading, isError };
};

export default useMutateCustom;
