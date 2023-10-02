import useUserAboutOverviewItem from "../../../../../../../../Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

interface UseUserAboutWorkEducationSectionProps {
	fieldName: "high school" | "college" | "work";
}

const useUserAboutWorkEducationSection = ({
	fieldName,
}: UseUserAboutWorkEducationSectionProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	const formType =
		fieldName === "college" || fieldName === "high school" ? fieldName : undefined;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		formType,
	};
};

export default useUserAboutWorkEducationSection;