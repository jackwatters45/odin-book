import { Link, Navigate } from "react-router-dom";
import useEnterSecurityCode from "./useEnterSecurityCode";
import renderFormErrors from "../../../../utils/renderFormErrors";
import Loading from "../../../Shared/Loading";

const EnterSecurityCode = () => {
	const { formServerError, register, submitForm, errors, recoverValue } =
		useEnterSecurityCode();

	if (recoverValue === false) {
		return <Navigate to="/recover/initiate" />;
	}

	if (recoverValue === undefined) {
		return <Loading />;
	}

	return (
		<form onSubmit={submitForm}>
			<h1>Enter security code</h1>
			{/* TODO icon etc */}
			<label htmlFor="code">
				Please check your{" "}
				{recoverValue.includes("@") ? "email for a message" : "phone for a text message"}{" "}
				with your code. Your code is 6 characters long.
			</label>
			<input
				type="text"
				id="code"
				placeholder="Enter code"
				aria-invalid={!!errors.code}
				{...register("code", {
					required: "Code is required",
					minLength: {
						value: 6,
						message: "Code must be 6 characters",
					},
					maxLength: {
						value: 6,
						message: "Code must be 6 characters",
					},
				})}
			/>
			{errors && <div>{errors.code?.message}</div>}
			<p>We sent your code to:</p>
			{/* TODO format */}
			<p>{recoverValue}</p>
			{formServerError && <div>{renderFormErrors(formServerError)}</div>}
			<Link to="/recover/initiate">{"Didn't get a code"}</Link>
			<button type="button">
				<Link to="/login">Cancel</Link>
			</button>
			<button type="submit">Continue</button>
		</form>
	);
};

export default EnterSecurityCode;
