import { mdiAccount, mdiFlag, mdiImageMultiple } from "@mdi/js";
import Icon from "@mdi/react";

import { IconCircleBackground, ImageCircle } from "@/components/Nav/Nav.styles";
import {
	StyledCreatePostButton,
	StyledCreateTypeButton,
	StyledFirstRowCreatePost,
	StyledLastRowCreatePost,
	StyledSearchInputCreatePost,
} from "./CreatePostButton.styles";

interface CreatePostButtonProps {
	userIcon: string | undefined;
}

const CreatePostButton = ({ userIcon }: CreatePostButtonProps) => {
	return (
		<StyledCreatePostButton>
			<StyledFirstRowCreatePost>
				{userIcon ? (
					<ImageCircle src={userIcon} alt={"User icon"} />
				) : (
					// TODO make a component for this?
					<IconCircleBackground path={mdiAccount} size={1.5} color={"#1c1e21"} />
				)}
				<StyledSearchInputCreatePost>
					<input type="text" placeholder="What's on your mind?" />
				</StyledSearchInputCreatePost>
			</StyledFirstRowCreatePost>
			<StyledLastRowCreatePost>
				<StyledCreateTypeButton>
					<Icon path={mdiImageMultiple} size={1.2} color={"#22c55e"} />
					<span>Photo/Video</span>
				</StyledCreateTypeButton>
				<StyledCreateTypeButton>
					<Icon path={mdiFlag} size={1.2} color={"#3b82f6"} />
					<span>Life event</span>
				</StyledCreateTypeButton>
			</StyledLastRowCreatePost>
		</StyledCreatePostButton>
	);
};

export default CreatePostButton;
