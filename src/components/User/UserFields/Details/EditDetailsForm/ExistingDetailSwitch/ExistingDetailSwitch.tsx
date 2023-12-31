import { mdiPencil } from "@mdi/js";
import Icon from "@mdi/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";
import { HTMLAttributes, ReactNode } from "react";

import { ExistingDetailSwitchContainer, ValueSpan } from "./ExistingDetailSwitch.styles";
import StyledCheckboxSwitch from "@/components/Shared/StyledCheckboxSwitch";

interface ExistingDetailSwitchProps<T extends FieldValues>
	extends HTMLAttributes<HTMLDivElement> {
	id: Path<T>;
	value: string;
	to: string;
	onClickLink?: () => void;
	register: ReturnType<UseFormRegister<FieldValues>> | undefined;
	icon?: ReactNode;
}

const ExistingDetailSwitch = <T extends FieldValues>({
	id,
	value,
	to,
	onClickLink,
	register,
	icon,
	...props
}: ExistingDetailSwitchProps<T>) => {
	return (
		<ExistingDetailSwitchContainer {...props}>
			{register && <StyledCheckboxSwitch id={id} register={register} />}
			{icon && icon}
			<ValueSpan>{value}</ValueSpan>
			<Link to={to} onClick={onClickLink}>
				<Icon path={mdiPencil} size={1} color={"black"} />
			</Link>
		</ExistingDetailSwitchContainer>
	);
};

export default ExistingDetailSwitch;
