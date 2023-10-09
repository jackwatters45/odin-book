import renderFormErrors from "@/utils/render/renderFormErrors";
import useLoginForm from "./useLoginForm";
import {
	validatePassword,
	validateUsernameForReactHookForm,
} from "../../utils/validationHelpers";
import AboutOverviewTextInput from "@/components/Shared/TextInput";
import {
	StyledForgotLoginLink,
	StyledRecoverCreateLinkContainer,
	StyledStandardButton,
} from "./LoginForm.styles";

interface LoginProps {
	className?: string;
	forgotText?: "password?" | "Account";
}

const LoginForm = ({ className, forgotText = "password?" }: LoginProps) => {
	const { formError, register, submitForm, errors, formValues } = useLoginForm();

	return (
		<form method="POST" onSubmit={submitForm} className={className}>
			<div className="formSection">
				<label htmlFor="username" hidden>
					Email or phone number:
				</label>
				<AboutOverviewTextInput
					labelText="Email or phone number"
					isSelectedValue={!!formValues.username}
					aria-invalid={!!errors.username}
					autoComplete="username"
					category={"username"}
					register={register("username", {
						validate: validateUsernameForReactHookForm,
					})}
				/>
				{errors.username && <div className="inputErrors">{errors.username.message}</div>}
			</div>
			<div className="formSection">
				<label htmlFor="password" hidden>
					Password:
				</label>
				<AboutOverviewTextInput
					labelText="Password"
					isSelectedValue={!!formValues.password}
					aria-invalid={!!errors.password}
					autoComplete="current-password"
					type="password"
					category={"password"}
					register={register("password", {
						required: "Password is required.",
						validate: validatePassword,
					})}
				/>
				{errors.password && <div className="inputErrors">{errors.password.message}</div>}
			</div>
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
