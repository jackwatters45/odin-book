import { useParams } from "react-router";
import { ILifeEvent } from "@/types/IUser";
import useQueryCustom from "@/hooks/useQueryCustom";

const useLifeEvents = () => {
	const { id: userId } = useParams<{ id: string }>();

	const { data: lifeEvents } = useQueryCustom<ILifeEvent[]>({
		queryKey: ["user", userId, "life-events"],
		queryUrl: `users/${userId}/life-events`,
	});

	return { userId, lifeEvents };
};

export default useLifeEvents;
