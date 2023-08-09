import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "../../config/envVariables";

interface LoginInputs {
	username: string;
	password: string;
	apiError: string;
}

const Login = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginInputs>();

	const { mutate } = useMutation({
		mutationFn: async (data: LoginInputs) => {
			const res = await fetch(`${apiBaseUrl}/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Network response was not ok");
			return await res.json();
		},
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], data);
			navigate("/");
		},
		onError: (err, variables, context) => {
			console.log(err, variables, context);
			setError("apiError", {
				type: "manual",
				message: "Invalid username or password",
			});
		},
	});

	const onSubmit: SubmitHandler<LoginInputs> = (data) => mutate(data);

	// TODO min values / password validation
	return (
		<div>
			<form method="POST" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="username">Email or phone number:</label>
					<input
						type="text"
						id="username"
						aria-invalid={!!errors.username}
						{...register("username", {
							required: "Email or phone number is required",
							maxLength: {
								value: 50,
								message: "Email or phone number can't exceed 50 characters",
							},
						})}
					/>
					{errors.username && <div>{errors.username.message}</div>}
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						aria-invalid={!!errors.password}
						{...register("password", {
							required: "Password is required",
							maxLength: {
								value: 50,
								message: "Password can't exceed 50 characters",
							},
						})}
					/>
					{errors.password && <div>{errors.password.message}</div>}
				</div>
				<button type="submit">Login</button>
				{errors.apiError && <div>{errors.apiError.message}</div>}
				<Link to={"recover"}>Forgot password</Link>
				<hr />
				<Link to={"/create-account"}>Create new account</Link>
			</form>
		</div>
	);
};

export default Login;
