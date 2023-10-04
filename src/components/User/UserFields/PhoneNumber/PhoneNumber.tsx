import { mdiPhone } from "@mdi/js";

import UserAboutOverviewItem from "../../Shared/UserAboutOverviewItem";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import formatPhoneNumber from "@/utils/format/formatPrettyPhoneNumber";
import PhoneNumberUserOverviewForm from "./Form";
import useUserAboutOverviewItem from "../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";

interface PhoneNumberProps {
	phoneNumber: string | undefined;
	audience: AudienceStatusOptions;
}

const PhoneNumber = ({ phoneNumber, audience }: PhoneNumberProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: "phone-number",
		param: undefined,
	});

	return (
		<UserAboutOverviewItem
			title={
				phoneNumber ? [{ type: "text", content: formatPhoneNumber(phoneNumber) }] : null
			}
			category="phoneNumber"
			categoryDisplayName="phone number"
			subtitle={phoneNumber ? "Mobile" : null}
			audience={audience}
			icon={mdiPhone}
			addText={"Add phone number to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={undefined}
			FormComponent={
				<PhoneNumberUserOverviewForm
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={phoneNumber}
				/>
			}
		/>
	);
};

export default PhoneNumber;
