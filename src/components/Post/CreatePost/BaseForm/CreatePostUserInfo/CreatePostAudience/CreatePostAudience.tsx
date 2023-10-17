import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import AudienceFormController from "./AudienceFormController";
import { Control, UseFormSetValue } from "react-hook-form";
import { StyledAudienceRadio } from "./CreatePostAudience.styles";
import { CreatePostFormValues } from "../../../types/CreatePostTypes";

interface CreatePostAudienceProps {
	audience: AudienceStatusOptions;
	control: Control<CreatePostFormValues>;
	setValue: UseFormSetValue<CreatePostFormValues>;
}

const CreatePostAudience = ({ audience, control, setValue }: CreatePostAudienceProps) => {
	return (
		<StyledAudienceRadio
			formField="audience"
			initial={audience}
			control={control}
			setValue={setValue}
			submitsForm={false}
			ControllerComponent={AudienceFormController}
		/>
	);
};

export default CreatePostAudience;
