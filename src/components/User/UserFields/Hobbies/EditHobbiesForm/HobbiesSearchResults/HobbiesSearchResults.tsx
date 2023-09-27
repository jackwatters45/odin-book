import { FieldValues, UseFormRegister } from "react-hook-form";

import OptionBadge from "@/components/Shared/OptionBadge";
import useHobbiesSearchResults from "./useHobbiesSearchResults";
import { StyledUppercaseText } from "@/styles/SharedStyles";
import {
	StyledNoResultsContainer,
	StyledNoResultsImg,
	StyledNoResultsText,
	StyledSearchResultsHobbiesContainer,
} from "./HobbiesSearchResults.styles";

interface HobbiesSearchResultsProps {
	searchValue: string;
	hobbiesValue: string[];
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const HobbiesSearchResults = ({
	searchValue,
	hobbiesValue,
	register,
}: HobbiesSearchResultsProps) => {
	const { filteredItems } = useHobbiesSearchResults({ searchValue, hobbiesValue });
	return (
		<div>
			<StyledUppercaseText>RESULTS FOR &quot;{searchValue}&quot;</StyledUppercaseText>
			<StyledSearchResultsHobbiesContainer>
				{filteredItems.length ? (
					filteredItems
						.slice(0, 30)
						.map(({ name, emoji }) => (
							<OptionBadge
								key={name}
								id={name}
								name={name}
								emoji={emoji}
								register={register}
							/>
						))
				) : (
					<StyledNoResultsContainer>
						<StyledNoResultsImg src="https://res.cloudinary.com/drheg5d7j/image/upload/v1693551066/odin-book/notFoundIcon_ujfa4i.jpg" />
						<StyledNoResultsText>
							This hobby is not currently available. Please try searching for another.
						</StyledNoResultsText>
					</StyledNoResultsContainer>
				)}
			</StyledSearchResultsHobbiesContainer>
		</div>
	);
};
export default HobbiesSearchResults;
