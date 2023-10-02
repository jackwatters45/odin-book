import { UseFormSetValue } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

import { DefaultUserSearch } from "./types/DefaultUserSearch";
import { FormFieldsWithAudience } from "@/types/FormFieldsWithAudience";

interface useUserSearchResultsParams {
	setValue: UseFormSetValue<FormFieldsWithAudience<DefaultUserSearch>>;
}

const useUserSearchResults = ({ setValue }: useUserSearchResultsParams) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		const container = containerRef.current;

		const handleFocus = () => setIsActive(true);
		const handleFocusOut = (e: FocusEvent) => {
			if (container && !container.contains(e.relatedTarget as Node)) {
				setIsActive(false);
			}
		};

		container?.addEventListener("focus", handleFocus, true);
		container?.addEventListener("focusout", handleFocusOut);

		return () => {
			container?.removeEventListener("focus", handleFocus, true);
			container?.removeEventListener("focusout", handleFocusOut);
		};
	}, []);

	const handleResultClick = (userId: string, name: string) => {
		setValue("values.user", userId);
		setValue("values.search", name);

		setIsActive(false);
	};

	return { handleResultClick, isActive, containerRef };
};

export default useUserSearchResults;
