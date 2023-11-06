import { apiBaseUrl } from "@/config/envVariables";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface IQueryCustomProps<T, U> {
	queryKey: (string | undefined)[];
	queryUrl: string;
	transformData?: (data: T) => U;
	includeCredentials?: boolean;
	options?: UseQueryOptions<U>;
	allowErrors?: boolean;
}

const useQueryCustom = <T = unknown, U = T>({
	queryKey,
	queryUrl,
	transformData,
	includeCredentials = true,
	allowErrors = false,
	options,
}: IQueryCustomProps<T, U>) => {
	const queryFn = async () => {
		const res = await fetch(`${apiBaseUrl}/${queryUrl}`, {
			method: "GET",
			credentials: includeCredentials ? "include" : "omit",
		});

		const json = await res.json();
		if (!(res.ok || res.status === 302) && !allowErrors) {
			throw new Error(json.message || json);
		}

		return transformData ? transformData(json) : json;
	};

	return useQuery<U>({
		queryKey,
		queryFn,
		...options,
	});
};

export default useQueryCustom;
