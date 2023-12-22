import { FieldValues, UseFormRegister } from "react-hook-form";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { v4 as uuid } from "uuid";

import { StyledBadge, StyledBadgeContainer } from "./OptionBadge.styles";
import { HTMLAttributes } from "react";

interface OptionBadgeProps extends HTMLAttributes<HTMLInputElement> {
	register: ReturnType<UseFormRegister<FieldValues>>;
	emoji?: string;
	showDelete?: boolean;
	hideName?: boolean;
	disabled?: boolean;
}

const OptionBadge = ({
	id,
	register,
	emoji,
	showDelete = false,
	hideName = false,
	disabled = false,
}: OptionBadgeProps) => {
	const name = `${id}-${uuid()}`;
	return (
		<StyledBadgeContainer key={name}>
			{!disabled && (
				<input
					className="hidden-checkbox"
					type="checkbox"
					id={id}
					value={id}
					{...register}
					disabled={disabled}
					onClick={() => console.log("clicked")}
					hidden
				/>
			)}
			<StyledBadge htmlFor={disabled ? undefined : id} $showDelete={showDelete}>
				{emoji && <span className="emoji">{emoji}</span>}
				{!hideName && <span>{id}</span>}
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
