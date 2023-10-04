import { Link } from "react-router-dom";

import renderFormErrors from "@/utils/render/renderFormErrors";
import { validateUsernameForReactHookForm } from "../../utils/validationHelpers";
import ForgotPasswordNav from "../ForgotPasswordNav";
import useFindYourAccount from "./useFindYourAccount";

const FindYourAccount = () => {
	const { formError, register, submitForm, errors, linkError } = useFindYourAccount();

	return (
		<div>
			<ForgotPasswordNav includeLogin={true} />
			<form method="POST" onSubmit={submitForm}>
				<h1>Find your account</h1>
				<p>Please enter your email or mobile number to search for your account.</p>
				<div className="formSection">
					<label htmlFor="usernameFind" hidden>
						Email or phone number:
					</label>
					<input
						type="text"
						id="usernameFind"
						placeholder="Email or phone number"
						aria-invalid={!!errors.username}
						autoComplete="username"
						{...register("username", {
							required: "Email or phone number is required",
							validate: (value) => validateUsernameForReactHookForm(value),
						})}
					/>
					{errors.username && (
						<div className="inputErrors">{errors.username.message}</div>
					)}
					{linkError && <div className="inputErrors">{linkError}</div>}
				</div>
				<button type="button">
					<Link to={"/login"}>Cancel</Link>
				</button>
				<button type="submit">Search</button>
				{formError && <div className="formErrors">{renderFormErrors(formError)}</div>}
			</form>
		</div>
	);
};

export default FindYourAccount;
