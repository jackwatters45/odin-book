import SearchButton from "./Button/SearchButton";
import SearchDialog from "./Dialog/SearchDialog";
import { SearchNavDropdown } from "./SearchNav.styles";

const SearchNav = () => (
	<SearchNavDropdown Button={SearchButton} DialogContent={SearchDialog} />
);

export default SearchNav;
