import Icon from "@mdi/react";
import { mdiArrowLeftThin, mdiMagnify } from "@mdi/js";

import {
	SearchInputContainer,
	SearchResult,
	StyledInput,
	StyledResultName,
} from "./Search.styles";
import { IconCircleBackground, ImageCircle } from "../Nav.styles";
import useSearch from "./useSearch";

const Search = () => {
	// TODO actual fetch
	const { register, data, searchQuery } = useSearch();

	return (
		<div>
			<SearchInputContainer>
				<button>
					<Icon path={mdiArrowLeftThin} size={1} />
				</button>
				<StyledInput type="text" placeholder="Search Odin Book" {...register("search")} />
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
