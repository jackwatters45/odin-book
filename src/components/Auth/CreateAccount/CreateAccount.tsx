import useCreateAccountForm, { CreateAccountInputs } from "./useCreateAccountForm";
import {
	validateUsernameForReactHookForm,
	validatePassword,
} from "../utils/validationHelpers";
import renderFormErrors from "../../../utils/render/renderFormErrors";
import {
	AuthRouteContainer,
	StyledAuthContainer,
	StyledAuthForm,
	StyledHeadingColumn,
} from "../styles/SharedAuthStyles";
import CreateAccountHeader from "./Header/CreateAccountHeader";
import AuthTextInput from "../Shared/AuthTextInput";
import CustomGender from "./CustomGender";
import {
	StyledForgotLoginLinkContainer,
	StyledNameContainer,
	StyledStandardButtonFullWidth,
	StyledTimePeriod,
} from "./CreateAccount.styles";
import GenderRadio from "./Gender/GenderRadio";
import { StyledForgotLoginLink } from "../Login/LoginForm/LoginForm.styles";

const CreateAccount = () => {
	const { formValues, formError, register, submitForm, errors, selectedGenderOption } =
		useCreateAccountForm();

	return (
		<AuthRouteContainer>
			<StyledAuthContainer>
				<StyledHeadingColumn>
					<h1>Odinbook</h1>
					<p>Connect with friends and the world around you on Odinbook.</p>
				</StyledHeadingColumn>
				<StyledAuthForm>
					<form method="POST" onSubmit={submitForm}>
						<CreateAccountHeader />
						<StyledNameContainer>
							<AuthTextInput<CreateAccountInputs>
								id="firstName"
								idText="First name"
								formValues={formValues}
								errors={errors}
								register={register("firstName", {
									required: "First name is required",
									maxLength: {
										value: 50,
										message: "First name cannot be longer than 50 characters",
									},
								})}
							/>
							<AuthTextInput<CreateAccountInputs>
								id="lastName"
								idText="Last name"
								formValues={formValues}
								errors={errors}
								register={register("lastName", {
									required: "Last name is required",
									maxLength: {
										value: 50,
										message: "Last name cannot be longer than 50 characters",
									},
								})}
							/>
						</StyledNameContainer>
						<AuthTextInput<CreateAccountInputs>
							id="username"
							idText="Mobile number or email"
							formValues={formValues}
							errors={errors}
							register={register("username", {
								required: "Mobile number or email is required",
								validate: validateUsernameForReactHookForm,
							})}
						/>
						<AuthTextInput<CreateAccountInputs>
							id="password"
							idText="New password"
							formValues={formValues}
							errors={errors}
							autoComplete="new-password"
							register={register("password", {
								required: "Password is required",
								validate: validatePassword,
							})}
						/>
						<StyledTimePeriod
							title="Birthday"
							checked={undefined}
							selectedValues={{
								startYear: formValues.year || String(new Date().getFullYear()),
								startMonth: formValues.month || String(new Date().getMonth()),
							}}
							inputs={{
								startYear: register("year", { required: true }),
								startMonth: register("month", { required: true }),
								startDay: register("day", { required: true }),
							}}
						/>
						<GenderRadio
							register={register}
							errors={errors}
							selectedGenderOption={selectedGenderOption}
						/>
						{selectedGenderOption === "custom" && (
							<CustomGender errors={errors} formValues={formValues} register={register} />
						)}
						<StyledStandardButtonFullWidth
							type="submit"
							text="Sign Up"
							colorClass="blue"
						/>
						{formError && <div>{renderFormErrors(formError)}</div>}
						<StyledForgotLoginLinkContainer>
							<StyledForgotLoginLink to={"/login"}>
								Already have an account?
							</StyledForgotLoginLink>
						</StyledForgotLoginLinkContainer>
					</form>
				</StyledAuthForm>
			</StyledAuthContainer>
		</AuthRouteContainer>
	);
};

export default CreateAccount;

{
	/* <div>
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
					</div> */
}
