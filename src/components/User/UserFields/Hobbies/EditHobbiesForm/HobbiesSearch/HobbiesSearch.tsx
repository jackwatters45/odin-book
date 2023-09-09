import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

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
					id="hobbies-search"
					placeholder="What do you do for fun?"
					{...register}
				/>
			</StyledHobbiesSearchLabel>
		</StyledHobbiesSearchContainer>
	);
};

export default HobbiesSearch;
