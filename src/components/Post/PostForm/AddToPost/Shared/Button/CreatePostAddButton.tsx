import Icon from "@mdi/react";
import { IconProps } from "@mdi/react/dist/IconProps";
import { StyledAddToPostButton } from "./CreatePostAddButton.styles";
import { HTMLAttributes } from "react";

interface CreatePostAddButtonProps extends HTMLAttributes<HTMLButtonElement> {
	openForm: () => void;
	title: string;
	iconProps: IconProps;
	isValue: boolean;
	isFormOpen?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	activeColor?: string;
}

const CreatePostAddButton = ({
	openForm,
	title,
	iconProps,
	isValue,
	isFormOpen,
	activeColor,
	type = "button",
	...props
}: CreatePostAddButtonProps) => {
	return (
		<StyledAddToPostButton
			title={title}
			onClick={openForm}
			className={isFormOpen || isValue ? "active" : ""}
			type={type}
			$activeColor={activeColor}
			{...props}
		>
			<Icon {...iconProps} />
		</StyledAddToPostButton>
	);
};

export default CreatePostAddButton;
