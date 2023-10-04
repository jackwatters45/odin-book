import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { Gender } from "./types/GenderTypes";

interface UseGenderProps {
	gender: Gender | undefined;
}

const useGender = ({ gender }: UseGenderProps) => {
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

export default useGender;
