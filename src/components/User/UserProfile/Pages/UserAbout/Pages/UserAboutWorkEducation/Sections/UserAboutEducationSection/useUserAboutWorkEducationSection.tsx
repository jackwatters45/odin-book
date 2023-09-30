import useUserAboutOverviewItem from "../../../../../../../../Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

interface UseUserAboutWorkEducationSectionProps {
	fieldName: "high school" | "college" | "work";
}

const useUserAboutEducationSection = ({
	fieldName,
}: UseUserAboutWorkEducationSectionProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({});

	const formType =
		fieldName === "college" || fieldName === "high school" ? fieldName : undefined;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		formType,
	};
};

export default useUserAboutEducationSection;
