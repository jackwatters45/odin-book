import AudienceRadio from "@/components/Shared/AudienceRadio";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import useUserPropertyAudience from "./useUserPropertyAudience";

interface UserPropertyAudienceProps {
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	itemId?: string;
}

const UserPropertyAudience = ({
	audience,
	category,
	itemId,
}: UserPropertyAudienceProps) => {
	const { handleSubmit, control, setValue } = useUserPropertyAudience({
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

export default UserPropertyAudience;
