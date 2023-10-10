import renderFormErrors from "@/utils/render/renderFormErrors";
import { validateUsernameForReactHookForm } from "../../utils/validationHelpers";
import useFindYourAccount, { FindYourAccountInputs } from "./useFindYourAccount";
import AuthTextInput from "../../Shared/AuthTextInput";
import StandardButton from "@/components/Shared/StandardButton";
import {
	StyledButtonsContainer,
	StyledFindAccountSubHeader,
} from "./FindYourAccount.styles";
import AuthRoutesWrapper from "../../Shared/AuthRoutesWrapper";
import { StyledRecoverHeader } from "../styles/ForgotPassword.styles";
import { StyledErrorText } from "../../Shared/AuthTextInput/AuthTextInput.styles";

const FindYourAccount = () => {
	const { formError, register, submitForm, errors, linkError, formValues } =
		useFindYourAccount();

	return (
		<AuthRoutesWrapper>
			<StyledRecoverHeader>Find your account</StyledRecoverHeader>
			<form method="POST" onSubmit={submitForm}>
				<StyledFindAccountSubHeader>
					Please enter your email or mobile number to search for your account.
				</StyledFindAccountSubHeader>
				<AuthTextInput<FindYourAccountInputs>
					id="username"
					idText="Email or phone number"
					formValues={formValues}
					errors={errors}
					autoComplete="username"
					register={register("username", {
						required: "Email or phone number is required",
						validate: (value) => validateUsernameForReactHookForm(value),
					})}
				/>
				{linkError && (
					<StyledErrorText className="inputErrors">{linkError}</StyledErrorText>
				)}
				{formError && (
					<StyledErrorText className="formErrors">
						{renderFormErrors(formError)}
					</StyledErrorText>
				)}
				<StyledButtonsContainer>
					<StandardButton type="button" text="Cancel" to="/login" />
					<StandardButton type="submit" text="Search" colorClass="blue" />
				</StyledButtonsContainer>
			</form>
		</AuthRoutesWrapper>
	);
};

export default FindYourAccount;
