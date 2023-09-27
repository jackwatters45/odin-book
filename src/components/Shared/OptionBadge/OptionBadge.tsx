import { FieldValues, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import { StyledBadge, StyledBadgeContainer } from "./OptionBadge.styles";

interface OptionBadgeProps {
	id: string;
	name: string;
	register: ReturnType<UseFormRegister<FieldValues>>;
	emoji?: string;
	isLink?: boolean;
	showDelete?: boolean;
	hideName?: boolean;
}

const OptionBadge = ({
	id,
	name,
	register,
	emoji,
	isLink = false,
	showDelete = false,
	hideName = false,
}: OptionBadgeProps) => {
	const badgeContent = (
		<>
			{emoji && <span className="emoji">{emoji}</span>}
			{!hideName && <span>{name}</span>}
			{showDelete && (
				<span className="remove-badge">
					<Icon path={mdiClose} size={0.65} color={"#1877f2"} />
				</span>
			)}
		</>
	);

	return (
		<StyledBadgeContainer key={name}>
			<input
				className="hidden-checkbox"
				type="checkbox"
				id={id}
				value={name}
				{...register}
				disabled={isLink}
				hidden
			/>
			{isLink ? (
				<Link to={`/search/top/?q=${name}`}>
					<StyledBadge htmlFor={id} $showDelete={showDelete}>
						{badgeContent}
					</StyledBadge>
				</Link>
			) : (
				<StyledBadge htmlFor={id} $showDelete={showDelete}>
					{badgeContent}
				</StyledBadge>
			)}
		</StyledBadgeContainer>
	);
};

export default OptionBadge;
