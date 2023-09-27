import { mdiAccount, mdiFlag, mdiImageMultiple } from "@mdi/js";

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
				<StyledCreateTypeButton
					text="Life event"
					icon={mdiFlag}
					iconSize={1.2}
					iconColor="#3b82f6"
					colorClass="transparent"
					onClick={() => {
						// TODO
						console.log("Life event");
					}}
				/>
			</StyledLastRowCreatePost>
		</StyledCreatePostButton>
	);
};

export default CreatePostButton;
