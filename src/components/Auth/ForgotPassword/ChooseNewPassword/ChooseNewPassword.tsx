import { Navigate } from "react-router";
import renderFormErrors from "@/utils/render/renderFormErrors";
import { validatePassword } from "../../utils/validationHelpers";
import useChooseNewPassword, { ChooseNewPasswordInputs } from "./useChooseNewPassword";
import AuthRoutesWrapper from "../../Shared/AuthRoutesWrapper";

import { StyledRecoverHeader } from "../styles/ForgotPassword.styles";
import StandardButton from "@/components/Shared/StandardButton";
import { StyledLabelSubtitle } from "../EnterSecurityCode/EnterSecurityCode.styles";
import { StyledButtonsContainer } from "../FindYourAccount/FindYourAccount.styles";
import AuthTextInput from "../../Shared/AuthTextInput";
import { StyledErrorText } from "../../Shared/AuthTextInput/AuthTextInput.styles";

const ChooseNewPassword = () => {
	const { token, formError, register, submitForm, errors, formValues, handleSkip } =
		useChooseNewPassword();

	if (!token) return <Navigate to={"/recover"} />;
	return (
		<AuthRoutesWrapper>
			<form onSubmit={submitForm}>
				<div>
					<input type="text" id="username" autoComplete="username" hidden />
				</div>
				<StyledRecoverHeader>Choose a new password</StyledRecoverHeader>
				<StyledLabelSubtitle>
					Create a new password that is at least 8 characters long. A strong password is
					combination of letters, numbers, and punctuation marks.
				</StyledLabelSubtitle>
				<AuthTextInput<ChooseNewPasswordInputs>
					id="newPassword"
					idText="Enter password"
					formValues={formValues}
					errors={errors}
					autoComplete="new-password"
					isPassword={true}
					register={register("newPassword", {
						required: "Password is required",
						validate: validatePassword,
					})}
				/>
				{formError && <StyledErrorText>{renderFormErrors(formError)}</StyledErrorText>}
				<StyledButtonsContainer>
					<StandardButton type="button" text="Skip" onClick={handleSkip} />
					<StandardButton type="submit" text="Continue" colorClass="blue" />
				</StyledButtonsContainer>
			</form>
		</AuthRoutesWrapper>
	);
};

export default ChooseNewPassword;
