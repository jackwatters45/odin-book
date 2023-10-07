import { mdiImageMultiple } from "@mdi/js";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import {
	StyledCreatePostButton,
	StyledCreateTypeButton,
	StyledFirstRowCreatePost,
	StyledLastRowCreatePost,
	StyledSearchInputCreatePost,
} from "./CreatePostButton.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";

interface CreatePostButtonProps {
	userIcon: string | undefined;
}

const CreatePostButton = ({ userIcon }: CreatePostButtonProps) => {
	return (
		<StyledCreatePostButton>
			<StyledFirstRowCreatePost>
				<ImageCircle src={userIcon || defaultUserAvatar} alt={"User icon"} />
				<StyledSearchInputCreatePost>
					<input type="text" placeholder="What's on your mind?" />
				</StyledSearchInputCreatePost>
			</StyledFirstRowCreatePost>
			<StyledLastRowCreatePost>
				<StyledCreateTypeButton
					text="Photo/Video"
					icon={mdiImageMultiple}
					iconSize={1.2}
					iconColor="#22c55e"
					colorClass="transparent"
					onClick={() => {
						// TODO
						console.log("Photo/Video");
					}}
				/>
			</StyledLastRowCreatePost>
		</StyledCreatePostButton>
	);
};

export default CreatePostButton;
