import renderFormErrors from "../../../../utils/renderFormErrors";
import ForgotPasswordNav from "../ForgotPasswordNav";
import useChooseNewPassword from "./useChooseNewPassword";

const ChooseNewPassword = () => {
	const {
		formServerError,
		register,
		submitForm,
		errors,
		handleSkip,
		showPassword,
		toggleShowPassword,
	} = useChooseNewPassword();

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
						Create a new password that is at least 6 characters long. A strong password is
						combination of letters, numbers, and punctuation marks.
					</label>
					<input
						type={showPassword ? "text" : "password"}
						id="newPassword"
						placeholder="Enter password"
						aria-invalid={!!errors.newPassword}
						autoComplete="new-password"
						{...register("newPassword")}
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
				{formServerError && <div>{renderFormErrors(formServerError)}</div>}
			</form>
		</div>
	);
};

export default ChooseNewPassword;
