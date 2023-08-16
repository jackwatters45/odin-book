import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useLogin from "../Login/useLogin";
import renderFormErrors from "../../../utils/renderFormErrors";

const LoginCachedUser = () => {
	const { userId } = useParams();

	// TODO fetch user (useQuery)
	const user = {
		id: userId,
		icon: "https://via.placeholder.com/150",
		name: "Jack Watters",
		username: "9544949167",
	};

	const { formServerError, register, submitForm, errors } = useLogin();

	return (
		<div>
			<h1>Odin Book</h1>
			<form method="POST" onSubmit={submitForm}>
				<div>
					<img src={user.icon} alt="Odin Book" />
					<p>Log in as {user.name}</p>
					<p>
						{user.username} • <Link to="/login">Not you?</Link>
					</p>
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
					{errors.password && (
						<div className="inputErrors">{errors.password.message}</div>
					)}
				</div>
				<button type="submit">
					<Link to="/login">Log in</Link>
				</button>
				<button type="button">
					<Link to="/recover/initiate">Try another way</Link>
				</button>
				{formServerError && (
					<div className="formErrors">{renderFormErrors(formServerError)}</div>
				)}
				<Link to="/recover" className="forgotLink">
					Forgot account?
				</Link>
			</form>
		</div>
	);
};

export default LoginCachedUser;
