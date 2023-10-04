import { formatEducationTitle } from "@/components/User/UserFields/Education/utils/formatEducationData";
import useUserAboutOverviewItem from "../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { EducationData } from "./types/EducationTypes";

interface useEducationProps {
	education: EducationData | undefined;
}

const useEducation = ({ education }: useEducationProps) => {
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

export default useEducation;
