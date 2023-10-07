import Icon from "@mdi/react";
import styled from "styled-components";

interface UserPropertyPlaceholderProps {
	text: string;
	icon: string;
}

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 0.95rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

const UserPropertyPlaceholder = ({ text, icon }: UserPropertyPlaceholderProps) => {
	return (
		<StyledContainer>
			<Icon path={icon} size={1.2} color={"#65676B"} />
			<span>{text}</span>
		</StyledContainer>
	);
};

export default UserPropertyPlaceholder;
