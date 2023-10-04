import { HTMLAttributes } from "react";
import StandardButton from "..";

interface StandardFullWidthButtonProps extends HTMLAttributes<HTMLElement> {
	dataExists: boolean;
	dataName: string;
}

const StandardFullWidthButton = ({
	dataExists,
	dataName,
	onClick,
	...props
}: StandardFullWidthButtonProps) => {
	return (
		<StandardButton
			onClick={onClick}
			text={`${dataExists ? "Edit" : "Add"} ${dataName}`}
			{...props}
		/>
	);
};

export default StandardFullWidthButton;
