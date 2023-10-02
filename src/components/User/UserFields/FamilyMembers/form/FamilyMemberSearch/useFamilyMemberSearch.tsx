import { UserAboutFormFields } from "@/components/Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/StandardUserOverviewForm";
import { FamilyMemberSearch } from "../useAboutFamilyMembers";
import { UseFormSetValue } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

interface useFamilyMemberSearchParams {
	setValue: UseFormSetValue<UserAboutFormFields<FamilyMemberSearch>>;
}

const useFamilyMemberSearch = ({ setValue }: useFamilyMemberSearchParams) => {
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

	const handleResultClick = (id: string, fullName: string) => {
		setValue("values.user", id);
		setValue("values.name", fullName);

		setIsActive(false);
	};

	return { handleResultClick, isActive, containerRef };
};

export default useFamilyMemberSearch;
