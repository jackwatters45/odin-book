import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { useEffect, useState } from "react";

interface UseAboutLanguagesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string[];
	handleCloseForm: () => void;
}
const useAboutLanguagesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutLanguagesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
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

export default useAboutLanguagesForm;
