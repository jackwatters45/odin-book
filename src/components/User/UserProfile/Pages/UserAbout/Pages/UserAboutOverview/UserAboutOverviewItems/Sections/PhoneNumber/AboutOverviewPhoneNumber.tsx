import { mdiPhone } from "@mdi/js";

import UserAboutOverviewItem from "../../UserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import formatPhoneNumber from "@/utils/formatPrettyPhoneNumber";
import PhoneNumberUserOverviewForm from "./form/PhoneNumberUserOverviewForm";
import useUserAboutOverviewItem from "../../UserAboutOverviewItem/useUserAboutOverviewItem";

interface AboutOverviewPhoneNumberProps {
	phoneNumber: string | undefined;
	audience: AudienceStatusOptions;
}

const AboutOverviewPhoneNumber = ({
	phoneNumber,
	audience,
}: AboutOverviewPhoneNumberProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "phone-number" });

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
			deleteMutation={deleteMutation}
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

export default AboutOverviewPhoneNumber;
