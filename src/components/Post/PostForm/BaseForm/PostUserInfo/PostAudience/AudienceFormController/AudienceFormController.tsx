import { Control, Controller, Path, FieldValues } from "react-hook-form";
import getAudienceIcon from "@/utils/audience/getAudienceIcon";
import { StyledCreatePostAudienceButton } from "./AudienceFormController.styles";

interface AudienceFormControllerProps<T extends FieldValues> {
	control: Control<T>;
	openDialog: () => void;
}

const AudienceFormController = <T extends FieldValues>({
	control,
	openDialog,
}: AudienceFormControllerProps<T>) => {
	return (
		<Controller
			name={"audience" as Path<T>}
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
