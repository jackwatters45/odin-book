import { StyledFullWidthButton } from "./StandardFullWidthButton.styles";

interface Props {
	dataExists: boolean;
	dataName: string;
	onClick: () => void;
}

const StandardFullWidthButton = ({ dataExists, dataName, onClick }: Props) => {
	return (
		<StyledFullWidthButton onClick={onClick}>
			{`${dataExists ? "Edit" : "Add"} ${dataName}`}
		</StyledFullWidthButton>
	);
};

export default StandardFullWidthButton;
