import { Navigate } from "react-router-dom";

import useEnterSecurityCode, { SecurityCodeInputs } from "./useEnterSecurityCode";
import renderFormErrors from "@/utils/render/renderFormErrors";
import AuthRoutesWrapper from "../../Shared/AuthRoutesWrapper";
import AuthTextInput from "../../Shared/AuthTextInput";
import { StyledRecoverHeader } from "../styles/ForgotPassword.styles";
import StandardButton from "@/components/Shared/StandardButton";
import {
	StyledButtonsContainer,
	StyledCodeSentTo,
	StyledInputRow,
	StyledLabelSubtitle,
} from "./EnterSecurityCode.styles";
import { StyledErrorText } from "../../Shared/AuthTextInput/AuthTextInput.styles";

const EnterSecurityCode = () => {
	const { formError, register, submitForm, errors, recoverValue, formValues } =
		useEnterSecurityCode();

	if (!recoverValue) return <Navigate to="/recover" />;

	return (
		<AuthRoutesWrapper>
			<form onSubmit={submitForm}>
				<StyledRecoverHeader>Enter security code</StyledRecoverHeader>
				<StyledLabelSubtitle>
					Please check your{" "}
					{recoverValue.includes("@")
						? "email for a message"
						: "phone for a text message"}{" "}
					with your code. Your code is 6 characters long.
				</StyledLabelSubtitle>
				<StyledInputRow>
					<AuthTextInput<SecurityCodeInputs>
						id="code"
						idText="Enter code"
						formValues={formValues}
						errors={errors}
						register={register("code", {
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
					<StyledCodeSentTo>
						<p>We sent your code to:</p>
						<p>{recoverValue}</p>
					</StyledCodeSentTo>
				</StyledInputRow>
				{formError && <StyledErrorText>{renderFormErrors(formError)}</StyledErrorText>}
				<StyledButtonsContainer>
					<StandardButton
						type="button"
						text="Didn't get a code"
						colorClass="transparent-blue"
						to="/recover/method"
					/>
					<div>
						<StandardButton type="button" text="Cancel" to="/login" />
						<StandardButton type="submit" text="Continue" colorClass="blue" />
					</div>
				</StyledButtonsContainer>
			</form>
		</AuthRoutesWrapper>
	);
};

export default EnterSecurityCode;
