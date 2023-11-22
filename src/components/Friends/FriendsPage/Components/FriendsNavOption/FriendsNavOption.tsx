import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import { StyledFriendsNavOption } from "./FriendsNavOption.styles";
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components";

interface FriendsNavOptionProps {
	icon: string;
	text: string;
	to: string;
	includeArrow?: boolean;
}

const StyledNavHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;
const FriendsNavOption = ({ icon, text, to, includeArrow }: FriendsNavOptionProps) => {
	return (
		<StyledFriendsNavOption to={to}>
			<StyledNavHeaderContainer>
				<IconCircleBackground path={icon} size={1.5} />
				<span>{text}</span>
			</StyledNavHeaderContainer>

			{includeArrow && <Icon path={mdiChevronRight} size={1} />}
		</StyledFriendsNavOption>
	);
};

export default FriendsNavOption;
