import useCreateAccountForm from "./useCreateAccountForm";
import {
	validateUsernameForReactHookForm,
	validatePassword,
} from "../utils/validationHelpers";
import { monthOptions, getDaysInMonth } from "../../../utils/dateHelpers";
import renderFormErrors from "../../../utils/render/renderFormErrors";

const CreateAccount = () => {
	const {
		formError,
		register,
		submitForm,
		errors,
		selectedGenderOption,
		selectedMonth,
		selectedYear,
	} = useCreateAccountForm();

	const currentYear = new Date().getFullYear();

	return (
		<div>
			<form method="POST" onSubmit={submitForm}>
				<div>
					<h2>Sign Up</h2>
					<p>It’s quick and easy.</p>
				</div>
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
							maxLength: {
								value: 50,
								message: "First name cannot be longer than 50 characters",
							},
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
							maxLength: {
								value: 50,
								message: "First name cannot be longer than 50 characters",
							},
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
						autoComplete="username"
						aria-invalid={!!errors.username}
						{...register("username", {
							required: "Mobile number or email is required",
							validate: validateUsernameForReactHookForm,
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
						placeholder="New password"
						autoComplete="new-password"
						aria-invalid={!!errors.password}
						{...register("password", {
							required: "Password is required",
							validate: validatePassword,
						})}
					/>
					{errors.password && <div>{errors.password.message}</div>}
				</div>
				<div>
					<label htmlFor="birthday">Birthday:</label>
					<div>
						<label htmlFor="month" hidden>
							Month:
						</label>
						<select
							id="month"
							defaultValue={new Date().getMonth()}
							aria-invalid={!!errors.month}
							{...register("month", {
								setValueAs: (value) => parseInt(value),
								required: "Month is required",
								min: {
									value: 0,
									message: "Invalid month",
								},
								max: {
									value: 11,
									message: "Invalid month",
								},
							})}
						>
							{monthOptions.map((month) => (
								<option key={month.value} value={month.value}>
									{month.label}
								</option>
							))}
						</select>
						{errors.month && <div>{errors.month.message}</div>}
					</div>
					<div>
						<label htmlFor="day" hidden>
							Day:
						</label>
						<select
							id="day"
							defaultValue={new Date().getDate() - 1}
							aria-invalid={!!errors.day}
							{...register("day", {
								setValueAs: (value) => parseInt(value),
								required: "Day is required",
								min: {
									value: 0,
									message: "Invalid day",
								},
								max: {
									value: getDaysInMonth(selectedMonth, selectedYear),
									message: "Invalid day",
								},
							})}
						>
							{[...Array(getDaysInMonth(selectedMonth, selectedYear))].map((_, i) => (
								<option key={i} value={i}>
									{i}
								</option>
							))}
						</select>
						{errors.day && <div>{errors.day.message}</div>}
					</div>
					<div>
						<label htmlFor="year" hidden>
							Year:
						</label>
						<select
							id="year"
							aria-invalid={!!errors.year}
							{...register("year", {
								setValueAs: (value) => parseInt(value),
								required: "Year is required",
								min: {
									value: currentYear - 100,
									message: "No one is that old",
								},
								max: {
									value: currentYear - 12,
									message: "You must be at least 13 years old",
								},
							})}
						>
							{[...Array(100)].map((_, i) => {
								return (
									<option key={i} value={currentYear - i}>
										{currentYear - i}
									</option>
								);
							})}
						</select>
						{errors.year && <div>{errors.year.message}</div>}
					</div>
				</div>
				<div>
					<label htmlFor="gender">Gender:</label>
					<div>
						<label htmlFor="male">Male</label>
						<input type="radio" id="male" value="male" {...register("gender")} />
					</div>
					<div>
						<label htmlFor="female">Female</label>
						<input type="radio" id="female" value="female" {...register("gender")} />
					</div>
					<div>
						<label htmlFor="custom">Custom</label>
						<input type="radio" id="custom" value="custom" {...register("gender")} />
					</div>
					{errors.gender && <div>{errors.gender.message}</div>}
				</div>
				{selectedGenderOption === "custom" && (
					<div>
						<div>
							<label htmlFor="pronouns" hidden>
								Pronouns:
							</label>
							<select
								id="pronouns"
								defaultValue=""
								aria-invalid={!!errors.pronouns}
								{...register("pronouns")}
							>
								<option value="" disabled>
									Select your pronouns
								</option>
								<option value="she/her">
									She: &ldquo;Wish her a happy birthday!&rdquo;
								</option>
								<option value="he/him">
									He: &ldquo;Wish him a happy birthday!&rdquo;
								</option>
								<option value="they/them">
									They: &ldquo;Wish them a happy birthday!&rdquo;
								</option>
							</select>
							<p>Your pronoun is visible to everyone.</p>
							{errors.pronouns && <div>{errors.pronouns.message}</div>}
						</div>
						<div>
							<label htmlFor="genderCustom" hidden>
								Gender (optional):
							</label>
							<input
								type="genderCustom"
								id="genderCustom"
								placeholder="Gender (optional)"
								aria-invalid={!!errors.genderCustom}
								{...register("genderCustom")}
							/>
							{errors.genderCustom && <div>{errors.genderCustom.message}</div>}
						</div>
					</div>
				)}
				<button type="submit">Sign Up</button>
				{formError && <div>{renderFormErrors(formError)}</div>}
			</form>
		</div>
	);
};

export default CreateAccount;
