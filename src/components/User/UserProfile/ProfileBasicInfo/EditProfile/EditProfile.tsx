import { Suspense, lazy } from "react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDialog from "@/hooks/dialogs/useDialog";
import { BottomDiv } from "@/styles/SharedStyles";
import {
	StyledEditProfileContent,
	StyledEditProfileDialog,
	StyledStandardButton,
	StyledStandardButtonFullWidth,
} from "./EditProfile.styles";

const DialogHeader = lazy(() => import("@/components/Shared/DialogHeader/DialogHeader"));
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
	const { ref, openDialog, closeDialog, isOpen } = useDialog({});

	const { avatarUrl, coverPhotoUrl, bio, hobbies } = user;

	return (
		<div>
			<StyledStandardButton
				text="Edit profile"
				icon={mdiPencil}
				onClick={openDialog}
				iconSize={0.75}
			/>
			{isOpen && (
				<Suspense>
					<StyledEditProfileDialog ref={ref}>
						<DialogHeader title={"Edit profile"} closeDialog={closeDialog} />
						<StyledEditProfileContent>
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
						</StyledEditProfileContent>
					</StyledEditProfileDialog>
				</Suspense>
			)}
		</div>
	);
};

export default EditProfile;
