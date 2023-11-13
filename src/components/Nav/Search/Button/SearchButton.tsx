import { mdiMagnify } from "@mdi/js";
import { IconCircleBackground } from "../../Nav.styles";
import { StyledNavDropdownButton } from "./SearchButton.styles";

interface SearchButtonProps {
	onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => (
	<StyledNavDropdownButton onClick={onClick}>
		<IconCircleBackground
			path={mdiMagnify}
			size={1.35}
			color={"#65676B"}
			background="transparent"
		/>
	</StyledNavDropdownButton>
);

export default SearchButton;
