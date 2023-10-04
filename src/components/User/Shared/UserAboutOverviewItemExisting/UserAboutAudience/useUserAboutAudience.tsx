import { FormEvent } from "react";
import { useParams } from "react-router";

import useFormCustom from "@/hooks/useFormCustom";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";

interface useUserAboutAudienceProps {
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	itemId?: string;
}

const useUserAboutAudience = ({
	audience,
	category,
	itemId,
}: useUserAboutAudienceProps) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const defaultValue = { [category]: audience, itemId };
	const { submitForm, setValue, control, watch } = useFormCustom({
		formOptions: { defaultValues: defaultValue },
		mutateOptions: {
			queryUrl: `users/${userId}/audience`,
			method: "PATCH",
			queryKey: ["user", userId],
			updateDataKey: "user",
		},
	});

	const formValue = watch(category);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isChanged =
			JSON.stringify(formValue) !== JSON.stringify(defaultValue[category]);

		if (isChanged) submitForm();
	};

	return {
		control,
		setValue,
		handleSubmit,
	};
};

export default useUserAboutAudience;
