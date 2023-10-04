import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import { useEffect, useState } from "react";

interface useLanguagesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string[];
	handleCloseForm: () => void;
}
const useLanguagesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useLanguagesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues,
			url: "languages",
			method: initialValues ? "PATCH" : "POST",
			handleCloseForm,
		});

	const [languages, setLanguages] = useState<string[]>(initialValues);

	useEffect(() => {
		setLanguages(initialValues);
	}, [initialValues]);

	const handleAddLanguage = () => setLanguages([...languages, ""]);

	const handleBlur = (index: number) => {
		if (!formValues.values?.[index]) {
			const updatedLanguages = [...languages];
			updatedLanguages.splice(index, 1);
			setLanguages(updatedLanguages);
		}
	};

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		languages,
		handleAddLanguage,
		handleBlur,
	};
};

export default useLanguagesForm;
