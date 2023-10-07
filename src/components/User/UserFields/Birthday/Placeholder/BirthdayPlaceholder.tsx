import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";
import { mdiCakeVariant } from "@mdi/js";

const BirthdayPlaceholder = () => {
	return <UserPropertyPlaceholder text={"No birthday to show"} icon={mdiCakeVariant} />;
};

export default BirthdayPlaceholder;
