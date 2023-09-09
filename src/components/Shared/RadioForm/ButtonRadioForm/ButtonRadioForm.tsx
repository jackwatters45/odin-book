import Icon from "@mdi/react";
import { StyledRadioFormButton } from "./ButtonRadioForm.styles";

interface ButtonRadioFormProps<T extends string> {
	value: T;
	onClick: () => void;
	icon?: string;
	text?: string;
	className?: string;
}

const ButtonRadioForm = <T extends string>({
	value,
	onClick,
	icon,
	text,
	className,
}: ButtonRadioFormProps<T>) => {
	return (
		<StyledRadioFormButton onClick={onClick} className={className} type="button">
			{icon && <Icon path={icon} size={0.7} />}
			<span>{text || value}</span>
		</StyledRadioFormButton>
	);
};

export default ButtonRadioForm;
