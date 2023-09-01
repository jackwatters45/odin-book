import { Link } from "react-router-dom";

import renderFormErrors from "@/utils/renderFormErrors";
import useLoginForm from "./useLoginForm";
import {
	validatePassword,
	validateUsernameForReactHookForm,
} from "../../utils/validationHelpers";

interface LoginProps {
	className?: string;
	forgotText?: "password" | "Account";
}

const LoginForm = ({ className, forgotText = "password" }: LoginProps) => {
	const { formError, register, submitForm, errors } = useLoginForm();

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
						validate: validateUsernameForReactHookForm,
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
						required: "Password is required.",
						validate: validatePassword,
					})}
				/>
				{errors.password && <div className="inputErrors">{errors.password.message}</div>}
			</div>
			<button type="submit">Login</button>
			{formError && <div className="formErrors">{renderFormErrors(formError)}</div>}
			<Link to={"/recover"} className="forgotLink">
				Forgot {forgotText}
			</Link>
			<Link to={"/create-account"}>Create new account</Link>
		</form>
	);
};

export default LoginForm;
