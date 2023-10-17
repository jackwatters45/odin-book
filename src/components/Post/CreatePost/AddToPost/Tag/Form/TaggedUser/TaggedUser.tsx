import { mdiClose } from "@mdi/js";

import { StyledStandardButton, StyledTaggedUser } from "./TaggedUser.styles";
import { TaggedUserType } from "../types/TagTypes";

interface TaggedUserProps {
	user: TaggedUserType;
	removeTaggedUser: (user: string) => void;
}

const TaggedUser = ({ user, removeTaggedUser }: TaggedUserProps) => {
	return (
		<StyledTaggedUser>
			<span>{user.fullName}</span>
			<StyledStandardButton
				onClick={() => removeTaggedUser(user._id)}
				text="close"
				showText={false}
				icon={mdiClose}
				iconSize={0.7}
				colorClass="light-blue"
			/>
		</StyledTaggedUser>
	);
};

export default TaggedUser;
