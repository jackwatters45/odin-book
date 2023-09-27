import { IUser } from "@/types/IUser";
import getDefaultFormStateDetails from "./getDefaultFormFieldsDetails";
import getCurrentCity from "../../PlacesLived/getCurrentCity";
import getHometown from "../../PlacesLived/getHometown";
import formatDateMonthYear from "@/utils/dateHelpers/formatDateMonthYear";

interface IUseEditDetailsForm {
	user: IUser;
}

const useEditDetailsForm = ({ user }: IUseEditDetailsForm) => {
	const formattedJoined = `Joined ${formatDateMonthYear(user?.createdAt)}`;

	const currentCity = getCurrentCity(user?.placesLived);
	const hometown = getHometown(user?.placesLived);

	const defaultValues = getDefaultFormStateDetails(user);

	return {
		formattedJoined,
		currentCity,
		hometown,
		defaultValues,
	};
};

export default useEditDetailsForm;
