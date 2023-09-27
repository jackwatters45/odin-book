import StandardButton from "../StandardButton";

interface Props {
	dataExists: boolean;
	dataName: string;
	onClick: () => void;
}

const StandardFullWidthButton = ({ dataExists, dataName, onClick }: Props) => {
	return (
		<StandardButton
			onClick={onClick}
			text={`${dataExists ? "Edit" : "Add"} ${dataName}`}
		/>
	);
};

export default StandardFullWidthButton;
