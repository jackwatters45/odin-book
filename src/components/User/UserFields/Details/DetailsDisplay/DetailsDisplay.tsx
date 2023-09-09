import { StyledDetailsDisplayContainer } from "./DetailsDisplay.styles";
import { IUser } from "@/types/IUser";
import EmptyDetailsDisplay from "./EmptyDetailsDisplay";
import DetailsDisplayContent from "./DetailsDisplayContent";

interface DetailsDisplayProps {
	user: IUser;
	isValues: boolean;
}

const DetailsDisplay = ({ user, isValues }: DetailsDisplayProps) => {
	return (
		<StyledDetailsDisplayContainer>
			{isValues ? <DetailsDisplayContent user={user} /> : <EmptyDetailsDisplay />}
		</StyledDetailsDisplayContainer>
	);
};

export default DetailsDisplay;
