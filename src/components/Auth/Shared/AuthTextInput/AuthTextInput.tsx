import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import {
	AuthTextInputContainer,
	StyledErrorText,
	StyledTextInput,
	StyledShowHideButton,
} from "./AuthTextInput.styles";
import { InputHTMLAttributes } from "react";
import useToggledState from "@/hooks/useToggledState";

interface AuthTextInputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	id: Path<T> & string;
	idText: string;
	register: ReturnType<UseFormRegister<T>>;
	formValues: T;
	errors: FieldErrors<T>;

	isPassword?: boolean;
}

const AuthTextInput = <T extends FieldValues>({
	id,
	idText,
	register,
	formValues,
	errors,
	isPassword = false,
	...props
}: AuthTextInputProps<T>) => {
	const [showPassword, toggleShowPassword] = useToggledState();

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
				type={!isPassword || showPassword ? "text" : "password"}
				{...props}
			/>
			{isPassword && (
				<StyledShowHideButton type="button" onClick={toggleShowPassword}>
					{showPassword ? "Hide" : "Show"}
				</StyledShowHideButton>
			)}
			{errors[id] && <StyledErrorText>{errors[id]?.message as string}</StyledErrorText>}
		</AuthTextInputContainer>
	);
};

export default AuthTextInput;
