import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import useIsOwnProfile from "@/hooks/useIsOwnProfile";

interface UseUserAboutWorkEducationSectionProps {
	fieldName: "high school" | "college" | "work";
}

const useUserAboutWorkEducationSection = ({
	fieldName,
}: UseUserAboutWorkEducationSectionProps) => {
	const isOwnProfile = useIsOwnProfile();

	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: undefined,
		param: undefined,
	});

	const formType =
		fieldName === "college" || fieldName === "high school" ? fieldName : undefined;

	return {
		isOwnProfile,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		formType,
	};
};

export default useUserAboutWorkEducationSection;
