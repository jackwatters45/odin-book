import { formatEducationTitle } from "@/components/User/UserFields/Education/formatEducationData";
import useUserAboutOverviewItem from "../../../../../../../../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { EducationData } from "@/types/IUser";

interface UseAboutOverviewEducationProps {
	education: EducationData | undefined;
}

const useAboutOverviewEducation = ({ education }: UseAboutOverviewEducationProps) => {
	const educationPretext = formatEducationTitle({
		education,
		includeSchool: false,
		includeFieldOfStudy: false,
	});
	const educationPretextFormatted = `${educationPretext} `;

	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({
			categoryUrl: "education",
			param: education?._id,
		});

	return {
		educationPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	};
};

export default useAboutOverviewEducation;
