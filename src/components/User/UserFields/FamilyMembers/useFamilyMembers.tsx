import useUserAboutOverviewItem from "@/components/User/Shared/SingleUserProperty/useSingleUserProperty";
import { FamilyMember } from "./types/FamilyMembersTypes";
import { ITitleSegment } from "@/utils/render/titleSegment/useRenderTitleSegments";

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
				} as ITitleSegment,
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
