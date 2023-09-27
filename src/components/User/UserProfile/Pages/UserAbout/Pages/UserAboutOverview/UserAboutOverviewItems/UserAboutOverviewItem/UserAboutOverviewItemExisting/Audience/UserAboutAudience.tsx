import AudienceRadio from "@/components/Shared/AudienceRadio";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserAboutAudience from "./useUserAboutAudience";
import { UserAboutAudienceFormFields } from "@/types/IUser";

interface UserAboutAudienceProps {
	audience: AudienceStatusOptions;
	category: UserAboutAudienceFormFields;
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
