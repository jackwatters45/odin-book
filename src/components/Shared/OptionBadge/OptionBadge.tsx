import { FieldValues, UseFormRegister } from "react-hook-form";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { StyledBadge, StyledBadgeContainer } from "./OptionBadge.styles";

interface OptionBadgeProps {
	id: string;
	name: string;
	register: ReturnType<UseFormRegister<FieldValues>>;
	emoji?: string;
	showDelete?: boolean;
	hideName?: boolean;
}

const OptionBadge = ({
	id,
	name,
	register,
	emoji,
	showDelete = false,
	hideName = false,
}: OptionBadgeProps) => {
	return (
		<StyledBadgeContainer key={name}>
			<input
				className="hidden-checkbox"
				type="checkbox"
				id={id}
				value={name}
				{...register}
				hidden
			/>
			<StyledBadge htmlFor={id} $showDelete={showDelete}>
				{emoji && <span className="emoji">{emoji}</span>}
				{!hideName && <span>{name}</span>}
				{showDelete && (
					<span className="remove-badge">
						<Icon path={mdiClose} size={0.65} color={"#1877f2"} />
					</span>
				)}
			</StyledBadge>
		</StyledBadgeContainer>
	);
};

export default OptionBadge;
