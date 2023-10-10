import { UseFormRegister } from "react-hook-form";
import { ResetPasswordProps } from "../useResetPasswordMethod";
import getLabelValue from "../utils/getLabelValue";
import { StyledRecoveryMethod, StyledRecoveryMethodText } from "./RecoveryMethod.styles";
import StyledRadio from "@/components/Shared/StyledRadio";

interface RecoveryMethodProps {
	value: string;
	type: "email" | "sms" | "password";
	register: UseFormRegister<ResetPasswordProps>;
	selectedValue?: string;
}

const RecoveryMethod = ({
	value,
	type,
	register,
	selectedValue,
}: RecoveryMethodProps) => {
	const labelValue = getLabelValue(type, value);

	return (
		<StyledRecoveryMethod htmlFor={type}>
			<StyledRadio
				id={type}
				radioValue={value}
				selectedValue={selectedValue}
				register={register("userId", { required: "Please select a method" })}
			/>
			<StyledRecoveryMethodText>
				{labelValue.map((text, index) => (
					<span key={index}>{text}</span>
				))}
			</StyledRecoveryMethodText>
		</StyledRecoveryMethod>
	);
};

export default RecoveryMethod;
