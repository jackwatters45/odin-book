import { lazy } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDialog from "@/hooks/useDialog";
import {
	StyledEditProfileButton,
	StyledButton,
	StyledEditProfileDialog,
} from "./EditProfile.styles";
import { BottomDiv } from "@/styles/SharedStyles";

const DialogHeader = lazy(() => import("@/components/Shared/DialogHeader/DialogHeader"));
const AvatarEditProfileSection = lazy(
	() => import("./Sections/Avatar/AvatarEditProfileSection"),
);
const CoverEditProfileSection = lazy(
	() => import("./Sections/Cover/CoverEditProfileSection"),
);
const BioEditProfileSection = lazy(() => import("./Sections/Bio"));
const IntroEditProfileSection = lazy(
	() => import("./Sections/Details/DetailsEditProfileSection"),
);
const HobbiesEditProfileSection = lazy(() => import("./Sections/Hobbies"));

interface EditProfileProps {
	user: IUser;
}

const EditProfile = ({ user }: EditProfileProps) => {
	const { ref, openDialog, closeDialog, LazyWrapper } = useDialog({});

	const { avatarUrl, coverPhotoUrl, bio, hobbies } = user;

	// TODO tests for all of this

	return (
		<div>
			<StyledEditProfileButton onClick={openDialog}>
				<Icon path={mdiPencil} size={0.75} />
				Edit profile
			</StyledEditProfileButton>
			<LazyWrapper>
				<StyledEditProfileDialog ref={ref}>
					<DialogHeader title={"Edit profile"} closeDialog={closeDialog} />
					<AvatarEditProfileSection avatarUrl={avatarUrl} />
					<CoverEditProfileSection coverPhotoUrl={coverPhotoUrl} />
					<BioEditProfileSection bio={bio} />
					<IntroEditProfileSection user={user} />
					<HobbiesEditProfileSection hobbies={hobbies} />
					<BottomDiv>
						<StyledButton onClick={closeDialog}>
							<Link to={"about"}>Edit your About info</Link>
						</StyledButton>
					</BottomDiv>
				</StyledEditProfileDialog>
			</LazyWrapper>
		</div>
	);
};

export default EditProfile;
