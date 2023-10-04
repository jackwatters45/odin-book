import { Navigate } from "react-router";
import renderFormErrors from "@/utils/render/renderFormErrors";
import { validatePassword } from "../../utils/validationHelpers";
import ForgotPasswordNav from "../ForgotPasswordNav";
import useChooseNewPassword from "./useChooseNewPassword";

const ChooseNewPassword = () => {
	const {
		token,
		formError,
		register,
		submitForm,
		errors,
		handleSkip,
		showPassword,
		toggleShowPassword,
	} = useChooseNewPassword();

	if (!token) return <Navigate to={"/recover"} />;
	return (
		<div>
			<ForgotPasswordNav />
			<form onSubmit={submitForm}>
				<div>
					<input type="text" id="username" autoComplete="username" hidden />
				</div>
				<h1>Choose a new password</h1>
				<div>
					<label htmlFor="newPassword">
						Create a new password that is at least 8 characters long. A strong password is
						combination of letters, numbers, and punctuation marks.
					</label>
					<input
						type={showPassword ? "text" : "password"}
						id="newPassword"
						placeholder="Enter password"
						aria-invalid={!!errors.newPassword}
						autoComplete="new-password"
						{...register("newPassword", {
							required: "Password is required",
							validate: validatePassword,
						})}
					/>
					{errors && <div>{errors.newPassword?.message}</div>}
					<button type="button" onClick={toggleShowPassword}>
						{showPassword ? "Hide" : "Show"}
					</button>
				</div>
				<div>
					<button type="button" onClick={handleSkip}>
						Skip
					</button>
					<button type="submit">Continue</button>
				</div>
				{formError && <div>{renderFormErrors(formError)}</div>}
			</form>
		</div>
	);
};

export default ChooseNewPassword;
