import Icon from "@mdi/react";
import { mdiArrowLeftThin, mdiMagnify } from "@mdi/js";

import { SearchInputContainer, SearchResult, StyledResultName } from "./Search.styles";
import { IconCircleBackground, ImageCircle } from "../Nav.styles";
import useSearch from "./useSearch";
import SearchInput from "@/components/Shared/SearchInput/SearchInput";

const Search = () => {
	// TODO actual fetch
	const { register, data, searchQuery } = useSearch();

	// TODO when empty no search for instead "No recent searches" text
	return (
		<div>
			<SearchInputContainer>
				<button>
					<Icon path={mdiArrowLeftThin} size={1} />
				</button>
				<SearchInput
					id="search"
					placeholder="Search Odinbook"
					register={register("search")}
				/>
			</SearchInputContainer>
			<div>
				{/* TODO make all results clickable */}
				{data?.map(({ fullName, avatarUrl, isFriend }) => (
					<SearchResult key={fullName}>
						<button>
							{isFriend ? (
								<ImageCircle src={avatarUrl} alt={fullName} size={36} />
							) : (
								<IconCircleBackground path={mdiMagnify} size={1.5} />
							)}
							<StyledResultName>
								<p>{fullName}</p>
								<p>{isFriend && "Friend"}</p>
							</StyledResultName>
						</button>
					</SearchResult>
				))}

				<SearchResult>
					<button>
						<IconCircleBackground path={mdiMagnify} size={1.5} background="blue" />
						<p>Search for {searchQuery}</p>
					</button>
				</SearchResult>
			</div>
		</div>
	);
};

export default Search;
