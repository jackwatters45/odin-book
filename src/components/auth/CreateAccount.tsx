import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "../../config/envVariables";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface CreateAccountInputs {
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	birthday: string;
	gender: string;
	apiError: string;
}

const CreateAccount = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
	} = useForm<CreateAccountInputs>();

	// TODO errors
	// TODO figure out resubmitting
	// TODO rest of todos
	// TODO -> useMutation hook
	// TODO add some spacing to make it look more readable
	const { mutate } = useMutation({
		mutationFn: async (data: CreateAccountInputs) => {
			const res = await fetch(`${apiBaseUrl}/auth/signup`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const json = await res.json();
			if (!res.ok) throw json;
			return json;
		},
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], data);
			navigate("/");
		},
		onError: (err: string, variables, context) => {
			console.log(err);

			// TODO parse error to set error message
			setError("apiError", {
				type: "manual",
				message: "Invalid username or password",
			});
		},
	});

	const onSubmit: SubmitHandler<CreateAccountInputs> = (data) => {
		clearErrors("apiError");

		// TODO format data - birthday + gender
		// TODO birthday validation backend

		mutate(data);
	};

	return (
		<div>
			<form method="POST" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="firstName" hidden>
						First name:
					</label>
					<input
						type="text"
						id="firstName"
						placeholder="First name"
						aria-invalid={!!errors.firstName}
						{...register("firstName", {
							required: "First name is required",
							// TODO
						})}
					/>
					{errors.firstName && <div>{errors.firstName.message}</div>}
				</div>
				<div>
					<label htmlFor="lastName" hidden>
						Last name:
					</label>
					<input
						type="lastName"
						id="lastName"
						placeholder="Last name"
						aria-invalid={!!errors.lastName}
						{...register("lastName", {
							required: "Last name is required",
							// TODO
						})}
					/>
					{errors.lastName && <div>{errors.lastName.message}</div>}
				</div>
				<div>
					<label htmlFor="username" hidden>
						Mobile number or email:
					</label>
					<input
						type="text"
						id="username"
						placeholder="Mobile number or email"
						aria-invalid={!!errors.username}
						{...register("username", {
							required: "Mobile number or email is required",
							// TODO
						})}
					/>
					{errors.username && <div>{errors.username.message}</div>}
				</div>
				<div>
					<label htmlFor="password" hidden>
						New password:
					</label>
					<input
						type="password"
						id="password"
						aria-invalid={!!errors.password}
						{...register("password", {
							required: "Password is required",
							// TODO
						})}
					/>
					{errors.password && <div>{errors.password.message}</div>}
				</div>
				<div>
					<label htmlFor="birthday">Birthday:</label>
					{/* TODO change format */}
					<input
						type="date"
						id="birthday"
						aria-invalid={!!errors.birthday}
						{...register("birthday", {
							required: "Birthday is required",
							// TODO
						})}
					/>
					{errors.birthday && <div>{errors.birthday.message}</div>}
				</div>
				<div>
					<label htmlFor="gender">Gender:</label>
					<select
						id="gender"
						{...register("gender", { required: "Please select your gender" })}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="custom">Custom</option>
						{/* TODO actual custom part */}
					</select>
					{errors.gender && <div>{errors.gender.message}</div>}
				</div>
				<button type="submit">Create Account</button>
				{errors.apiError && <div>{errors.apiError.message}</div>}
			</form>
		</div>
	);
};

export default CreateAccount;
