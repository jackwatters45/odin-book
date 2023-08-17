import { Link } from "react-router-dom";
import renderFormErrors from "../../../../utils/renderFormErrors";
import { validateUsernameForReactHookForm } from "../../utils/validationHelpers";
import ForgotPasswordNav from "../ForgotPasswordNav";
import useFindYourAccount from "./useFindYourAccount";

const FindYourAccount = () => {
	const { formServerError, register, submitForm, errors } = useFindYourAccount();

	return (
		<div>
			<ForgotPasswordNav includeLogin={true} />
			<form method="POST" onSubmit={submitForm}>
				<h1>Find your account</h1>
				<p>Please enter your email or mobile number to search for your account.</p>
				<label htmlFor="username" hidden>
					Email or phone number:
				</label>
				<div className="formSection">
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
							validate: (value) => validateUsernameForReactHookForm(value),
						})}
					/>
					{errors.username && (
						<div className="inputErrors">{errors.username.message}</div>
					)}
				</div>
				<button type="button">
					<Link to={"/login"}>Cancel</Link>
				</button>
				<button type="submit">Search</button>
				{formServerError && (
					<div className="formErrors">{renderFormErrors(formServerError)}</div>
				)}
			</form>
		</div>
	);
};

export default FindYourAccount;
