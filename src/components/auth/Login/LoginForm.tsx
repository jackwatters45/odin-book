import { Link } from "react-router-dom";

import renderFormErrors from "../../../utils/renderFormErrors";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
	const { formServerError, register, submitForm, errors } = useLoginForm();

	return (
		<div>
			<form method="POST" onSubmit={submitForm}>
				<div>
					<label htmlFor="username" hidden>
						Email or phone number:
					</label>
					<input
						type="text"
						id="username"
						placeholder="Email or phone number"
						aria-invalid={!!errors.username}
						{...register("username", {
							required: "Email or phone number is required",
							minLength: {
								value: 5,
								message: "Email or phone number must be at least 5 characters",
							},
							maxLength: {
								value: 50,
								message: "Email or phone number can't exceed 50 characters",
							},
						})}
					/>
					{errors.username && <div>{errors.username.message}</div>}
				</div>
				<div>
					<label htmlFor="password" hidden>
						Password:
					</label>
					<input
						type="password"
						id="password"
						placeholder="Password"
						aria-invalid={!!errors.password}
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
					{errors.password && <div>{errors.password.message}</div>}
				</div>
				<button type="submit">Login</button>
				{formServerError && <div>{renderFormErrors(formServerError)}</div>}
				<Link to={"recover"}>Forgot password</Link>
				<hr />
				<Link to={"/create-account"}>Create new account</Link>
			</form>
		</div>
	);
};

export default LoginForm;
