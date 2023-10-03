import useUserAboutOverviewItem from "@/components/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { Gender } from "./types/GenderTypes";

interface AboutGenderProps {
	gender: Gender | undefined;
}

const useAboutGender = ({ gender }: AboutGenderProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "gender", param: undefined });

	const displayGender =
		gender?.defaultType !== "Other" ? gender?.defaultType : gender?.other;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		displayGender,
	};
};

export default useAboutGender;
