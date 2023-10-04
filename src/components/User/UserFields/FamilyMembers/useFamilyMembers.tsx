import useUserAboutOverviewItem from "@/components/User/Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { FamilyMember } from "./types/FamilyMembersTypes";
import { TitleSegment } from "@/components/User/Shared/UserAboutOverviewItem/UserAboutOverviewItem";

interface useFamilyMembersParams {
	familyMember: FamilyMember | undefined;
}

const useFamilyMembers = ({ familyMember }: useFamilyMembersParams) => {
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

export default useFamilyMembers;
