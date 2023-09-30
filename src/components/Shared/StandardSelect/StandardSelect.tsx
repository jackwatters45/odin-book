import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { StyledSelectInput } from "./StandardSelect.styles";

interface StandardSelectProps {
	id: string;
	options: React.JSX.Element[];
	register: ReturnType<UseFormRegister<FieldValues>>;
	defaultValue?: string;
	errors?: boolean;
	className?: string;
}

const StandardSelect = ({
	id,
	options,
	register,
	defaultValue = "",
	errors,
	className,
}: StandardSelectProps) => {
	return (
		<StyledSelectInput
			id={id}
			className={className}
			defaultValue={defaultValue}
			aria-invalid={!!errors}
			{...register}
		>
			{options}
		</StyledSelectInput>
	);
};

export default StandardSelect;
