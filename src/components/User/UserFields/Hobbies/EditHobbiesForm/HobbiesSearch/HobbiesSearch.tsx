import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { v4 as uuid } from "uuid";

import {
	StyledHobbiesSearchContainer,
	StyledHobbiesSearchLabel,
} from "./HobbiesSearch.styles";

interface HobbiesSearchProps {
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const HobbiesSearch = ({ register }: HobbiesSearchProps) => {
	return (
		<StyledHobbiesSearchContainer>
			<StyledHobbiesSearchLabel>
				<span>
					<Icon path={mdiMagnify} size={0.9} color={"#65676b"} />
				</span>
				<input
					type="text"
					id={`hobbies-search-${uuid()}`}
					placeholder="What do you do for fun?"
					{...register}
				/>
			</StyledHobbiesSearchLabel>
		</StyledHobbiesSearchContainer>
	);
};

export default HobbiesSearch;
