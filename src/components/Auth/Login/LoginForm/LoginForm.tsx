import { Link } from "react-router-dom";

import renderFormErrors from "../../../../utils/renderFormErrors";
import useLoginForm from "./useLoginForm";
import { validateUsernameForReactHookForm } from "../../utils/validationHelpers";

interface LoginProps {
	className?: string;
	forgotText?: "password" | "Account";
}

const LoginForm = ({ className, forgotText = "password" }: LoginProps) => {
	const { formServerError, register, submitForm, errors } = useLoginForm();

	return (
		<form method="POST" onSubmit={submitForm} className={className}>
			<div className="formSection">
				<label htmlFor="username" hidden>
					Email or phone number:
				</label>
				<input
					type="text"
					id="username"
					placeholder="Email or phone number"
					aria-invalid={!!errors.username}
					autoComplete="username"
					{...register("username", {
						required: "Email or phone number is required",
						validate: (value) => validateUsernameForReactHookForm(value),
					})}
				/>
				{errors.username && <div className="inputErrors">{errors.username.message}</div>}
			</div>
			<div className="formSection">
				<label htmlFor="password" hidden>
					Password:
				</label>
				<input
					type="password"
					id="password"
					placeholder="Password"
					aria-invalid={!!errors.password}
					autoComplete="current-password"
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters",
						},
						maxLength: {
							value: 50,
							message: "Password can't exceed 50 characters",
						},
					})}
				/>
				{errors.password && <div className="inputErrors">{errors.password.message}</div>}
			</div>
			<button type="submit">Login</button>
			{formServerError && (
				<div className="formErrors">{renderFormErrors(formServerError)}</div>
			)}
			<Link to={"/recover"} className="forgotLink">
				Forgot {forgotText}
			</Link>
			<Link to={"/create-account"}>Create new account</Link>
		</form>
	);
};

export default LoginForm;
