import useUserAboutOverviewItem from "@/components/Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";
import { FamilyMember } from "./types/FamilyMembers";
import { TitleSegment } from "@/components/Shared/USER/UserAboutOverviewItem/UserAboutOverviewItem";

interface UseAboutFamilyMembersParams {
	familyMember: FamilyMember | undefined;
}

const useAboutFamilyMembers = ({ familyMember }: UseAboutFamilyMembersParams) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({
			categoryUrl: "family-members",
			param: familyMember?._id,
		});

	const title = familyMember?.user.fullName
		? [
				{
					type: "link",
					content: familyMember?.user.fullName,
					linkTo: `/user/${familyMember?.user._id}`,
				} as TitleSegment,
		  ]
		: null;

	return {
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
		title,
	};
};

export default useAboutFamilyMembers;
