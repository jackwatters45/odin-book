import useCreateAccountForm, { CreateAccountInputs } from "./useCreateAccountForm";
import {
	validateUsernameForReactHookForm,
	validatePassword,
} from "../utils/validationHelpers";
import renderFormErrors from "../../../utils/render/renderFormErrors";
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
import AuthRoutesWrapper from "../Shared/AuthRoutesWrapper";

const CreateAccount = () => {
	const { formValues, formError, register, submitForm, errors, selectedGenderOption } =
		useCreateAccountForm();

	return (
		<AuthRoutesWrapper>
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
					idText="Password"
					formValues={formValues}
					errors={errors}
					autoComplete="new-password"
					isPassword={true}
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
				<StyledStandardButtonFullWidth type="submit" text="Sign Up" colorClass="blue" />
				{formError && <div>{renderFormErrors(formError)}</div>}
				<StyledForgotLoginLinkContainer>
					<StyledForgotLoginLink to={"/login"}>
						Already have an account?
					</StyledForgotLoginLink>
				</StyledForgotLoginLinkContainer>
			</form>
		</AuthRoutesWrapper>
	);
};

export default CreateAccount;
