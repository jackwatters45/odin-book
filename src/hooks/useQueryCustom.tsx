import { apiBaseUrl } from "@/config/envVariables";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface IQueryCustomProps<T, U> {
	queryKey: (string | undefined)[];
	queryUrl: string;
	transformData?: (data: T) => U;
	includeCredentials?: boolean;
	options?: UseQueryOptions<U>;
}

const useQueryCustom = <T = unknown, U = T>({
	queryKey,
	queryUrl,
	transformData,
	includeCredentials = true,
	options,
}: IQueryCustomProps<T, U>) => {
	const queryFn = async () => {
		const res = await fetch(`${apiBaseUrl}/${queryUrl}`, {
			method: "GET",
			credentials: includeCredentials ? "include" : "omit",
		});

		const json = await res.json();
		if (!(res.ok || res.status === 302)) {
			throw new Error(json.message || json);
		}

		return transformData ? transformData(json) : json;
	};

	const { data, error, isLoading, isError, isSuccess, refetch } = useQuery<U>({
		queryKey,
		queryFn,
		...options,
	});

	return {
		data,
		error,
		isLoading,
		isError,
		isSuccess,
		refetch,
	};
};

export default useQueryCustom;
