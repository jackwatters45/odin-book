import { FieldValues, UseFormRegister } from "react-hook-form";
import { StyledBadge, StyledBadgeContainer } from "./OptionBadge.styles";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Link } from "react-router-dom";

interface OptionBadgeProps {
	name: string;
	register: ReturnType<UseFormRegister<FieldValues>>;
	emoji?: string;
	isLink?: boolean;
	showDelete?: boolean;
	hideName?: boolean;
}

const OptionBadge = ({
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
				<button>
					<Icon path={mdiClose} size={0.65} color={"#1877f2"} />
				</button>
			)}
		</>
	);

	return (
		<StyledBadgeContainer key={name}>
			<input
				className="hidden-checkbox"
				type="checkbox"
				id={name}
				value={name}
				{...register}
				disabled={isLink}
				hidden
			/>
			{isLink ? (
				<Link to={`/search/top/?q=${name}`}>
					<StyledBadge htmlFor={name} showDelete={showDelete}>
						{badgeContent}
					</StyledBadge>
				</Link>
			) : (
				<StyledBadge htmlFor={name} showDelete={showDelete}>
					{badgeContent}
				</StyledBadge>
			)}
		</StyledBadgeContainer>
	);
};

export default OptionBadge;
