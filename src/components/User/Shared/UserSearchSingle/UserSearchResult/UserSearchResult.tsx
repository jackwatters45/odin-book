import { ImageCircle } from "@/components/Nav/Nav.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import { UserSearchResult } from "../types/SearchResults";
import { StyledSearchResult } from "./UserSearchResult.styles";

interface UserSearchResultProps {
	user: UserSearchResult;
	handleResultClick: (user: string, fullName: string) => void;
}
const UserSearchResult = ({ user, handleResultClick }: UserSearchResultProps) => {
	return (
		<StyledSearchResult
			key={user._id}
			onClick={() => handleResultClick(user._id, user.fullName)}
		>
			<span>
				<ImageCircle src={user.avatarUrl || defaultUserAvatar} alt="icon" size={40} />
			</span>
			<span>{user.fullName}</span>
		</StyledSearchResult>
	);
};

export default UserSearchResult;
