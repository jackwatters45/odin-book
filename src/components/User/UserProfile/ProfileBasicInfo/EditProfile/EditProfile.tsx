import { Suspense, lazy } from "react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDialog from "@/hooks/useDialog";
import { BottomDiv } from "@/styles/SharedStyles";
import {
	StyledEditProfileDialog,
	StyledStandardButton,
	StyledStandardButtonFullWidth,
} from "./EditProfile.styles";

const DialogHeader = lazy(
	() => import("@/components/Shared/Dialog/DialogHeader/DialogHeader"),
);
const AvatarEditProfileSection = lazy(
	() => import("../../../UserFields/Avatar/EditProfile/EditProfileAvatar"),
);
const CoverEditProfileSection = lazy(
	() => import("../../../UserFields/CoverPhoto/EditProfile/CoverEditProfile"),
);
const BioEditProfileSection = lazy(() => import("../../../UserFields/Bio/EditProfile"));
const IntroEditProfileSection = lazy(
	() => import("../../../UserFields/Details/EditProfile/EditProfileDetails"),
);
const HobbiesEditProfileSection = lazy(
	() => import("../../../UserFields/Hobbies/EditProfile"),
);

interface EditProfileProps {
	user: IUser;
}

const EditProfile = ({ user }: EditProfileProps) => {
	const { ref, openDialog, closeDialog } = useDialog({});

	const { avatarUrl, coverPhotoUrl, bio, hobbies } = user;

	return (
		<div>
			<StyledStandardButton
				text="Edit profile"
				icon={mdiPencil}
				onClick={openDialog}
				iconSize={0.75}
			/>
			<Suspense>
				<StyledEditProfileDialog ref={ref}>
					<DialogHeader title={"Edit profile"} closeDialog={closeDialog} />
					<AvatarEditProfileSection avatarUrl={avatarUrl} />
					<CoverEditProfileSection coverPhotoUrl={coverPhotoUrl} />
					<BioEditProfileSection bio={bio} />
					<IntroEditProfileSection user={user} closeParentDialog={closeDialog} />
					<HobbiesEditProfileSection hobbies={hobbies} />
					<BottomDiv>
						<StyledStandardButtonFullWidth
							text="Edit your About info"
							to="about"
							colorClass="light-blue"
							onClick={closeDialog}
						/>
					</BottomDiv>
				</StyledEditProfileDialog>
			</Suspense>
		</div>
	);
};

export default EditProfile;
