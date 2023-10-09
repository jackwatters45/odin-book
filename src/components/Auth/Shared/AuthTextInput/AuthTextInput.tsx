import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import {
	AuthTextInputContainer,
	StyledErrorText,
	StyledTextInput,
} from "./AuthTextInput.styles";
import { InputHTMLAttributes } from "react";

interface AuthTextInputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	id: keyof T & string;
	idText: string;
	register: ReturnType<UseFormRegister<T>>;
	formValues: T;
	errors: FieldErrors<T>;
}

const AuthTextInput = <T extends FieldValues>({
	id,
	idText,
	register,
	formValues,
	errors,
	...props
}: AuthTextInputProps<T>) => {
	return (
		<AuthTextInputContainer>
			<label htmlFor={id} hidden>
				{idText}:
			</label>
			<StyledTextInput
				category={id}
				isSelectedValue={!!formValues[id]}
				aria-invalid={!!errors[id]}
				register={register}
				labelText={idText}
				{...props}
			/>
			{errors[id] && <StyledErrorText>{errors[id]?.message as string}</StyledErrorText>}
		</AuthTextInputContainer>
	);
};

export default AuthTextInput;
