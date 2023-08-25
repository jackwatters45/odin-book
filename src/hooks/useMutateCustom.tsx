import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SetStateAction } from "react";
import { useNavigate } from "react-router";

import { apiBaseUrl } from "../../config/envVariables";
import { ResponseError, ValidationError } from "../../types/ErrorInterfaces";

export interface useMutateFormProps {
	queryUrl: string;
	method: "POST" | "PUT" | "DELETE" | "GET";
	successNavigate?: string;
	queryKey?: string;
	excludeData?: boolean;
	includeCredentials?: boolean;
	onError?: (err: SetStateAction<string | ValidationError[]>) => void;
}

export interface MutationFnInputs<T> {
	data?: T;
	params?: string;
}

const useMutateCustom = <T,>({
	queryUrl,
	method,
	successNavigate = "/",
	queryKey,
	excludeData = false,
	includeCredentials = true,
	onError,
}: useMutateFormProps) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

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
			if (queryKey) {
				if (excludeData) queryClient.resetQueries([queryKey]);
				else queryClient.setQueryData([queryKey], data[queryKey]);
			}

			navigate(successNavigate, { state: { data } }); // TODO might need change
		},
		onError: (err: ResponseError) => {
			// TODO might need some work depending on the error
			if (onError) return onError(err.errors || err.message || "");
		},
	});

	return { mutate };
};

export default useMutateCustom;
