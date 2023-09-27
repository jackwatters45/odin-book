import { useParams } from "react-router";

const useLifeEventDisplay = () => {
	const { id: userId } = useParams<{ id: string }>();

	return { userId };
};

export default useLifeEventDisplay;
