import { mdiCommentQuote } from "@mdi/js";

import UserPropertyPlaceholder from "@/components/User/Shared/UserPropertyPlaceholder";

const FavoriteQuotesPlaceholder = () => {
	return (
		<UserPropertyPlaceholder text={"No favorite quotes to show"} icon={mdiCommentQuote} />
	);
};

export default FavoriteQuotesPlaceholder;
