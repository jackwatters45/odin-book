import { mdiPhone } from "@mdi/js";

import UserAboutOverviewItem from "../../../Shared/USER/UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import formatPhoneNumber from "@/utils/formatPrettyPhoneNumber";
import PhoneNumberUserOverviewForm from "./form/AboutPhoneNumberForm";
import useUserAboutOverviewItem from "../../../Shared/USER/UserAboutOverviewItem/useUserAboutOverviewItem";

interface AboutPhoneNumberProps {
	phoneNumber: string | undefined;
	audience: AudienceStatusOptions;
}

const AboutPhoneNumber = ({ phoneNumber, audience }: AboutPhoneNumberProps) => {
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

export default AboutPhoneNumber;
