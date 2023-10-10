import formatPhoneNumber from "@/utils/format/formatPrettyPhoneNumber";
import blurEmail from "@/utils/format/blurEmail";

const getLabelValue = (type: "email" | "sms" | "password", value: string) => {
	if (type === "email") {
		return ["Send code via email ", blurEmail(value)];
	} else if (type === "sms") {
		return ["Send code via SMS", formatPhoneNumber(value)];
	}
	return ["Enter password to log in"];
};

export default getLabelValue;
