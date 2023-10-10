import renderFormErrors from "@/utils/render/renderFormErrors";
import useLoginForm, { LoginFormInputs } from "./useLoginForm";
import {
	validatePassword,
	validateUsernameForReactHookForm,
} from "../../utils/validationHelpers";
import {
	StyledForgotLoginLink,
	StyledRecoverCreateLinkContainer,
	StyledStandardButton,
} from "./LoginForm.styles";
import AuthTextInput from "../../Shared/AuthTextInput";

interface LoginProps {
	className?: string;
	forgotText?: "password?" | "Account";
}

const LoginForm = ({ className, forgotText = "password?" }: LoginProps) => {
	const { formError, register, submitForm, errors, formValues } = useLoginForm();

	return (
		<form method="POST" onSubmit={submitForm} className={className}>
			<AuthTextInput<LoginFormInputs>
				id="username"
				idText="Mobile number or email"
				formValues={formValues}
				errors={errors}
				autoComplete="username"
				register={register("username", {
					required: "Mobile number or email is required",
					validate: validateUsernameForReactHookForm,
				})}
			/>
			<AuthTextInput<LoginFormInputs>
				id="password"
				idText="Password"
				formValues={formValues}
				errors={errors}
				autoComplete="current-password"
				type="password"
				register={register("password", {
					required: "Password is required.",
					validate: validatePassword,
				})}
			/>
			<StyledStandardButton colorClass="blue" text="Login" type="submit" />
			{formError && <div className="formErrors">{renderFormErrors(formError)}</div>}
			<StyledRecoverCreateLinkContainer>
				<StyledForgotLoginLink to={"/recover"} className="forgotLink">
					Forgot {forgotText}
				</StyledForgotLoginLink>
				<StyledForgotLoginLink to={"/create-account"}>
					Create account
				</StyledForgotLoginLink>
			</StyledRecoverCreateLinkContainer>
		</form>
	);
};

export default LoginForm;
