import { formatEducationTitle } from "@/components/User/UserFields/Education/utils/formatEducationData";
import useUserAboutOverviewItem from "../../Shared/SingleUserProperty/useSingleUserProperty";
import { IEducation } from "./types/EducationTypes";

interface useEducationProps {
	education: IEducation | undefined;
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
