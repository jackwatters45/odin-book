import { Control, Controller } from "react-hook-form";
import getAudienceIcon from "@/utils/audience/getAudienceIcon";
import { StyledCreatePostAudienceButton } from "./AudienceFormController.styles";
import { CreatePostFormValues } from "@/components/Post/CreatePost/types/CreatePostTypes";

interface AudienceFormControllerProps {
	control: Control<CreatePostFormValues>;
	openDialog: () => void;
}

const AudienceFormController = ({ control, openDialog }: AudienceFormControllerProps) => {
	return (
		<Controller
			name={"audience"}
			control={control}
			render={({ field }) => {
				return (
					<StyledCreatePostAudienceButton
						icon={getAudienceIcon(field.value)}
						text={field.value}
						onClick={openDialog}
						iconSize={0.6}
					/>
				);
			}}
		/>
	);
};

export default AudienceFormController;
