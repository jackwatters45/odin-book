import { mdiAccountMultiple, mdiEarth, mdiLock } from "@mdi/js";
import { Control, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import RadioForm from "../RadioForm";

interface AudienceRadioProps<T extends FieldValues> {
	formField: Path<T>;
	initial: PathValue<T, Path<T>>;
	control: Control<T>;
	setValue: UseFormSetValue<T>;
}

const AudienceRadio = <T extends FieldValues>(props: AudienceRadioProps<T>) => {
	return (
		<RadioForm<T>
			{...props}
			title="Select Audience"
			options={[
				{
					title: "Public",
					icon: mdiEarth,
					subtitle: "Anyone on or off Odinbook",
				},
				{
					title: "Friends",
					icon: mdiAccountMultiple,
					subtitle: "Your friends on Odinbook",
				},
				{
					title: "Only Me",
					icon: mdiLock,
					subtitle: "Only you",
				},
			]}
		/>
	);
};

export default AudienceRadio;
