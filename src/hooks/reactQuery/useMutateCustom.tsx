/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";

import { apiBaseUrl } from "../../config/envVariables";
import { FormError, ResponseError } from "../../types/ErrorInterfaces";
import useError from "@/components/Errors/useError";

export interface useMutateFormProps {
	queryUrl: string;
	method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
	queryKey?: string[];
	updateDataKey?: string;
	headers?: HeadersInit;
	onError?: Dispatch<SetStateAction<FormError>>;
	successNavigate?: string;
	onSuccessFn?: (data: any) => void;
	includeCredentials?: boolean;
}

export interface MutationFnInputs<T> {
	data?: T | FormData;
	params?: string;
}

const useMutateCustom = <T,>({
	queryUrl,
	method,
	queryKey,
	updateDataKey,
	headers,
	onError,
	successNavigate,
	onSuccessFn,
	includeCredentials = true,
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
				if (!updateDataKey) queryClient.resetQueries(queryKey);
				else queryClient.setQueryData(queryKey, data[updateDataKey]);
			}

			if (onSuccessFn) onSuccessFn(data);

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
