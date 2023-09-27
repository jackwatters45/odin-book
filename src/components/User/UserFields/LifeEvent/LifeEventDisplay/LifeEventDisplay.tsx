import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import { mdiIceCream } from "@mdi/js";

import { LifeEventData } from "@/types/IUser";
import useLifeEventDisplay from "./useLifeEventDisplay";
import formatDateMonthYear from "@/utils/dateHelpers/formatDateMonthYear";
import {
	StyledLifeEvent,
	StyledLifeEventDate,
	StyledLifeEventDisplay,
	StyledLifeEventTitle,
} from "./LifeEventDisplay.styles";

interface LifeEventDisplayProps {
	lifeEvents: LifeEventData[] | undefined;
}

const LifeEventDisplay = ({ lifeEvents }: LifeEventDisplayProps) => {
	const { userId } = useLifeEventDisplay();

	return lifeEvents && lifeEvents?.length > 0 ? (
		<StyledLifeEventDisplay>
			{lifeEvents?.slice(0, 2).map(({ _id, title, date }) => {
				return (
					<StyledLifeEvent key={_id} to={`/${userId}/posts/${_id}`}>
						<IconCircleBackground
							path={mdiIceCream}
							size={1.5}
							background={"#1b74e4"}
							color={"white"}
						/>
						<StyledLifeEventTitle>{title}</StyledLifeEventTitle>
						<StyledLifeEventDate>{formatDateMonthYear(date)}</StyledLifeEventDate>
					</StyledLifeEvent>
				);
			})}
		</StyledLifeEventDisplay>
	) : null;
};

export default LifeEventDisplay;
