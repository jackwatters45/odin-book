import { mdiAccountRemoveOutline } from "@mdi/js";
import FriendButton from "./Buttons/FriendButton";
import { StyledFriendStatusMoreOptions } from "../FriendStatus.styles";
import useUnfriendUser from "../../../hooks/useUnfriendUser";

interface IsFriendStatusProps {
	id: string;
	includeButton: boolean;
}

const IsFriendStatus = ({ id, includeButton }: IsFriendStatusProps) => {
	const unfriendUser = useUnfriendUser(id);
	const handleUnfriendUser = () => unfriendUser();

	return (
		<StyledFriendStatusMoreOptions
			categoryName={"friend"}
			openForm={undefined}
			deleteMutation={undefined}
			isUsingDialog={true}
			Button={includeButton ? FriendButton : undefined}
			options={[
				{
					text: "Unfriend",
					icon: mdiAccountRemoveOutline,
					onClick: handleUnfriendUser,
				},
			]}
		/>
	);
};

export default IsFriendStatus;
