import AudienceRadio from "@/components/Shared/AudienceRadio";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import useUserAboutAudience from "./useUserAboutAudience";

interface UserAboutAudienceProps {
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	itemId?: string;
}

const UserAboutAudience = ({ audience, category, itemId }: UserAboutAudienceProps) => {
	const { handleSubmit, control, setValue } = useUserAboutAudience({
		audience,
		category,
		itemId,
	});

	return (
		<form onSubmit={handleSubmit}>
			<AudienceRadio
				formField={category}
				initial={audience}
				control={control}
				setValue={setValue}
				submitsForm={true}
				buttonOptions={{
					className: "icon-only",
					colorClass: "transparent",
					showText: false,
					text: undefined,
				}}
			/>
		</form>
	);
};

export default UserAboutAudience;
