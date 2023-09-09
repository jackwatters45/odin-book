import { mdiPencil } from "@mdi/js";
import Icon from "@mdi/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

import StyledCheckboxSwitch from "../../../../../Shared/StyledCheckboxSwitch/StyledCheckboxSwitch";
import { ExistingDetailSwitchContainer, ValueSpan } from "./ExistingDetailSwitch.styles";

interface ExistingDetailSwitchProps<T extends FieldValues> {
	id: Path<T>;
	value: string;
	to: string;
	register: ReturnType<UseFormRegister<FieldValues>> | undefined;
	icon?: ReactNode;
}

const ExistingDetailSwitch = <T extends FieldValues>({
	id,
	value,
	to,
	register,
	icon,
}: ExistingDetailSwitchProps<T>) => {
	return (
		<ExistingDetailSwitchContainer>
			{!icon && register ? <StyledCheckboxSwitch id={id} register={register} /> : icon}
			<ValueSpan>{value}</ValueSpan>
			<Link to={to}>
				<Icon path={mdiPencil} size={1} color={"black"} />
			</Link>
		</ExistingDetailSwitchContainer>
	);
};

export default ExistingDetailSwitch;
