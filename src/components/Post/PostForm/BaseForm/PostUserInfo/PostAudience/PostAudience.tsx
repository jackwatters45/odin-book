import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import AudienceFormController from "./AudienceFormController";
import { Control, UseFormSetValue } from "react-hook-form";
import { PostFormValues } from "../../../types/PostFormTypes";
import AudienceRadio from "@/components/Shared/AudienceRadio";

interface PostAudienceProps {
	audience: AudienceStatusOptions;
	control: Control<PostFormValues>;
	setValue: UseFormSetValue<PostFormValues>;
}

const PostAudience = ({ audience, control, setValue }: PostAudienceProps) => {
	return (
		<AudienceRadio
			formField="audience"
			initial={audience}
			control={control}
			setValue={setValue}
			submitsForm={false}
			ControllerComponent={AudienceFormController}
		/>
	);
};

export default PostAudience;
