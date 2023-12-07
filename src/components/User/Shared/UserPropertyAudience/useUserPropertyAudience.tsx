import useFormCustom from "@/hooks/reactQuery/useFormCustom";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import { FormEvent } from "react";
import { useParams } from "react-router";

interface UserPropertyAudienceProps {
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	itemId?: string;
}

const UserPropertyAudience = ({
	audience,
	category,
	itemId,
}: UserPropertyAudienceProps) => {
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

export default UserPropertyAudience;
