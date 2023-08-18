import { Link, Navigate } from "react-router-dom";

import useResetPasswordMethod from "./useResetPasswordMethod";
import renderFormErrors from "../../../../utils/renderFormErrors";
import RecoverUserPreview from "../utils/RecoverUserPreview";
import blurEmail from "./utils/blurEmail";
import ForgotPasswordNav from "../ForgotPasswordNav";

const ResetPasswordMethod = () => {
	const { user, formServerError, register, submitForm, errors } =
		useResetPasswordMethod();

	if (!user) return <Navigate to={"/recover"} />;
	return (
		<div>
			<ForgotPasswordNav />
			<form onSubmit={submitForm}>
				<h1>Reset your password</h1>
				<div>
					<label htmlFor="userId">
						How do you want to get the code to reset your password?
					</label>
					{user?.email && (
						<div>
							<label htmlFor="email">
								<p>Send code vie email</p>
								<p>{blurEmail(user?.email)}</p>
							</label>
							<input
								type="radio"
								id="email"
								value={user?.email}
								{...register("userId", { required: "Please select a method" })}
							/>
						</div>
					)}
					{user.phoneNumber && (
						<div>
							<label htmlFor="sms">
								<p>Send code via SMS</p>
								<p>{user?.phoneNumber}</p>
							</label>
							<input
								type="radio"
								id="sms"
								value={user?.phoneNumber}
								{...register("userId", { required: "Please select a method" })}
							/>
						</div>
					)}
					<div>
						<label htmlFor="password">Enter password to log in</label>
						<input
							type="radio"
							id="password"
							value="password"
							{...register("userId", { required: "Please select a method" })}
						/>
					</div>
					{errors.userId && <div>{errors.userId.message}</div>}
				</div>
				<RecoverUserPreview user={user} includeNotYou={false} />
				{formServerError && <p>{renderFormErrors(formServerError)}</p>}
				<button type="button">
					<Link to="/recover">Not you?</Link>
				</button>
				<button type="submit">Continue</button>
			</form>
		</div>
	);
};

export default ResetPasswordMethod;
