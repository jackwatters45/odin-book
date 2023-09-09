import {
	StyledRadioContainer,
	StyledRadioInput,
	StyledRadioSpan,
} from "./StyledRadio.styles";

interface StyledRadioProps {
	radioValue: string;
	id: string;
	selectedValue: string;
	onChange: () => void;
}

const StyledRadio = ({ radioValue, id, selectedValue, onChange }: StyledRadioProps) => {
	return (
		<StyledRadioContainer>
			<StyledRadioInput
				type="radio"
				id={id}
				name={id}
				value={radioValue}
				checked={selectedValue === radioValue}
				onChange={onChange}
			/>
			<StyledRadioSpan />
		</StyledRadioContainer>
	);
};

export default StyledRadio;
