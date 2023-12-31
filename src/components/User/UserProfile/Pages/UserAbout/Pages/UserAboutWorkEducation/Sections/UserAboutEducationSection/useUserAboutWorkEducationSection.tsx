import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

interface UseUserAboutWorkEducationSectionProps {
	fieldName: "high school" | "college" | "work";
}

const useUserAboutWorkEducationSection = ({
	fieldName,
}: UseUserAboutWorkEducationSectionProps) => {
	const { isOwnProfile } = useProfileStatus();

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
