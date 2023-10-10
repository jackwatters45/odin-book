import { Navigate } from "react-router-dom";

import useResetPasswordMethod from "./useResetPasswordMethod";
import renderFormErrors from "@/utils/render/renderFormErrors";
import RecoverUserPreview from "./RecoverUserPreview";
import AuthRoutesWrapper from "../../Shared/AuthRoutesWrapper";
import { StyledRecoverHeader } from "../styles/ForgotPassword.styles";
import {
	StyledButtonsContainer,
	StyledFindAccountSubHeader,
} from "../FindYourAccount/FindYourAccount.styles";
import StandardButton from "@/components/Shared/StandardButton";
import RecoveryMethod from "./RecoveryMethod";
import {
	StyledAuthFormContents,
	StyledRecoveryMethods,
} from "./ResetPasswordMethod.styles";
import { StyledErrorText } from "../../Shared/AuthTextInput/AuthTextInput.styles";

const ResetPasswordMethod = () => {
	const { user, formError, register, submitForm, errors, selectedValue } =
		useResetPasswordMethod();

	if (!user) return <Navigate to={"/recover"} />;
	return (
		<AuthRoutesWrapper>
			<StyledRecoverHeader>Reset your password</StyledRecoverHeader>
			<form onSubmit={submitForm}>
				<StyledAuthFormContents>
					<div>
						<StyledFindAccountSubHeader>
							How do you want to get the code to reset your password?
						</StyledFindAccountSubHeader>
						<StyledRecoveryMethods>
							{user?.email && (
								<RecoveryMethod
									value={user.email}
									type="email"
									register={register}
									selectedValue={selectedValue}
								/>
							)}
							{user.phoneNumber && (
								<RecoveryMethod
									value={user.phoneNumber}
									type="sms"
									register={register}
									selectedValue={selectedValue}
								/>
							)}
							<RecoveryMethod
								value="password"
								type="password"
								register={register}
								selectedValue={selectedValue}
							/>
						</StyledRecoveryMethods>
						{errors.userId && <StyledErrorText>{errors.userId.message}</StyledErrorText>}
						{formError && (
							<StyledErrorText>{renderFormErrors(formError)}</StyledErrorText>
						)}
					</div>
					<RecoverUserPreview user={user} />
				</StyledAuthFormContents>

				<StyledButtonsContainer>
					<StandardButton type="button" text="Not you?" to="/recover" />
					<StandardButton type="submit" text="Continue" colorClass="blue" />
				</StyledButtonsContainer>
			</form>
		</AuthRoutesWrapper>
	);
};

export default ResetPasswordMethod;
