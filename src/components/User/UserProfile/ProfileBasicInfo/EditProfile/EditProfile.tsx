import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

import { IUser } from "@/types/IUser";
import useDialog from "@/hooks/useDialog";
import IntroEditProfileSection from "./Sections/Intro/IntroEditProfileSection";
import HobbiesEditProfileSection from "./Sections/Hobbies";
import AvatarEditProfileSection from "./Sections/Avatar/AvatarEditProfileSection";
import CoverEditProfileSection from "./Sections/Cover/CoverEditProfileSection";
import BioEditProfileSection from "./Sections/Bio";
import { StyledEditProfileButton, BottomDiv, StyledButton } from "./EditProfile.styles";
import ModalHeader from "@/components/Shared/ModalHeader/ModalHeader";

interface EditProfileProps {
	user: IUser;
}

// TODO modal scroll
export const StyledDialog = styled.dialog`
	background: white;
	color: black;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
	border: none;
	z-index: 1001;

	//
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 700px;
	width: 90%;
	max-height: 90%;
	overflow: hidden; // TODO

	// TODO
	// margin: 50px auto;
	// overflow-y: auto;
	// position: fixed;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 0;
	//

	::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}
`;

const EditProfile = ({ user }: EditProfileProps) => {
	const { ref, openDialog, closeDialog } = useDialog();

	const { avatarUrl, coverPhotoUrl, bio, hobbies } = user;

	// TODO tests for all of this

	return (
		<div>
			<StyledEditProfileButton onClick={openDialog}>
				<Icon path={mdiPencil} size={0.75} />
				Edit profile
			</StyledEditProfileButton>
			<StyledDialog ref={ref}>
				<ModalHeader title={"Edit profile"} closeDialog={closeDialog} />
				<AvatarEditProfileSection avatarUrl={avatarUrl} />
				<CoverEditProfileSection coverPhotoUrl={coverPhotoUrl} />
				<BioEditProfileSection bio={bio} />
				<IntroEditProfileSection intro={"user.intro"} />
				<HobbiesEditProfileSection hobbies={hobbies} />
				<BottomDiv>
					<StyledButton onClick={closeDialog}>
						<Link to={"about"}>Edit your About info</Link>
					</StyledButton>
				</BottomDiv>
			</StyledDialog>
		</div>
	);
};

export default EditProfile;
