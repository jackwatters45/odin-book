import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { SwitchInput, SwitchLabel, SwitchWrapper } from "./StyledCheckboxSwitch.styles";

interface StyledCheckboxSwitchProps<T extends FieldValues> {
	id: Path<T>;
	register: ReturnType<UseFormRegister<FieldValues>>;
}

const StyledCheckboxSwitch = <T extends FieldValues>({
	id,
	register,
}: StyledCheckboxSwitchProps<T>) => {
	return (
		<SwitchWrapper>
			<SwitchInput type="checkbox" id={id} {...register} hidden />
			<SwitchLabel htmlFor={id} />
		</SwitchWrapper>
	);
};

export default StyledCheckboxSwitch;
