import { mdiAccountMultiple, mdiEarth, mdiLock } from "@mdi/js";
import { FieldValues } from "react-hook-form";

import RadioForm from "../RadioForm";
import { RadioFormCoreFormProps } from "../RadioForm/RadioForm";

const AudienceRadio = <T extends FieldValues>(props: RadioFormCoreFormProps<T>) => {
	return (
		<RadioForm<T>
			{...props}
			title="Select Audience"
			options={[
				{
					title: "Public",
					value: "Public",
					icon: mdiEarth,
					subtitle: "Anyone on or off Odinbook",
				},
				{
					title: "Friends",
					value: "Friends",
					icon: mdiAccountMultiple,
					subtitle: "Your friends on Odinbook",
				},
				{
					title: "Only Me",
					value: "Only Me",
					icon: mdiLock,
					subtitle: "Only you",
				},
			]}
		/>
	);
};

export default AudienceRadio;
