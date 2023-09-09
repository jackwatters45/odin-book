import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDialog from "@/hooks/useDialog";
import IntroEditProfileSection from "./Sections/Details/DetailsEditProfileSection";
import HobbiesEditProfileSection from "./Sections/Hobbies";
import AvatarEditProfileSection from "./Sections/Avatar/AvatarEditProfileSection";
import CoverEditProfileSection from "./Sections/Cover/CoverEditProfileSection";
import BioEditProfileSection from "./Sections/Bio";
import {
	StyledEditProfileButton,
	StyledButton,
	StyledEditProfileDialog,
} from "./EditProfile.styles";
import DialogHeader from "@/components/Shared/DialogHeader/DialogHeader";
import { BottomDiv } from "@/styles/SharedStyles";

interface EditProfileProps {
	user: IUser;
}

const EditProfile = ({ user }: EditProfileProps) => {
	const { ref, openDialog, closeDialog } = useDialog({});

	const { avatarUrl, coverPhotoUrl, bio, hobbies } = user;

	// TODO tests for all of this

	return (
		<div>
			<StyledEditProfileButton onClick={openDialog}>
				<Icon path={mdiPencil} size={0.75} />
				Edit profile
			</StyledEditProfileButton>
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
		</div>
	);
};

export default EditProfile;
