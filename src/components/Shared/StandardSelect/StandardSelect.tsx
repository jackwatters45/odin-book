import React, { HTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { StyledSelectInput } from "./StandardSelect.styles";

interface StandardSelectProps extends HTMLAttributes<HTMLSelectElement> {
	id: string;
	options: React.JSX.Element[];
	register: ReturnType<UseFormRegister<FieldValues>>;
	defaultValue?: string;
	errors?: boolean;
}

const StandardSelect = ({
	id,
	options,
	register,
	defaultValue = "",
	errors,
	...props
}: StandardSelectProps) => {
	return (
		<StyledSelectInput
			id={id}
			defaultValue={defaultValue}
			aria-invalid={!!errors}
			{...register}
			{...props}
		>
			{options}
		</StyledSelectInput>
	);
};

export default StandardSelect;
