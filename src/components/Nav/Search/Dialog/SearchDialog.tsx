import Icon from "@mdi/react";
import { mdiArrowLeftThin, mdiMagnify } from "@mdi/js";
import { Link } from "react-router-dom";

import {
	SearchInputContainer,
	SearchResult,
	StyledResultName,
	StyledSearchResultSubtext,
} from "./SearchDialog.styles";
import { IconCircleBackground, ImageCircle } from "../../Nav.styles";
import useSearch from "../useSearch";
import SearchInput from "@/components/Shared/SearchInput/SearchInput";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";
import highlightNonMatch from "@/utils/format/highlightNonMatch";

interface SearchProps {
	closeDialog: () => void;
}

const SearchDialog = ({ closeDialog }: SearchProps) => {
	const { register, searchResults, searchQuery, currentUserId } = useSearch();

	return (
		<div>
			<SearchInputContainer>
				<button onClick={closeDialog}>
					<Icon path={mdiArrowLeftThin} size={1} />
				</button>
				<SearchInput
					id="search"
					placeholder="Search Odinbook"
					register={register("search")}
				/>
			</SearchInputContainer>
			<div>
				{searchResults?.map(({ _id, fullName, avatarUrl, isFriend }) => (
					<SearchResult key={_id} onClick={closeDialog}>
						<Link to={`/user/${_id}`}>
							{isFriend || currentUserId === _id ? (
								<ImageCircle
									src={avatarUrl || defaultUserAvatar}
									alt={fullName}
									size={36}
								/>
							) : (
								<IconCircleBackground path={mdiMagnify} size={1.5} />
							)}
							<StyledResultName>
								<span>
									{highlightNonMatch(fullName, searchQuery).map((part, index) =>
										part.match ? (
											<span key={index}>{part.text}</span>
										) : (
											<strong key={index}>{part.text}</strong>
										),
									)}
								</span>
								<StyledSearchResultSubtext>
									{currentUserId === _id ? "You" : isFriend ? "Friend" : undefined}
								</StyledSearchResultSubtext>
							</StyledResultName>
						</Link>
					</SearchResult>
				))}
				{/* TODO */}
				{/* {searchQuery && (
					<SearchResult>
						<Link to={`/search/top/?q=${searchQuery}`}>
							<IconCircleBackground
								path={mdiMagnify}
								size={1.5}
								background="#1b74e4"
								color={"white"}
							/>
							<StyledSearchForText>
								Search for <strong>{searchQuery}</strong>
							</StyledSearchForText>
						</Link>
					</SearchResult>
				)} */}
			</div>
		</div>
	);
};

export default SearchDialog;
