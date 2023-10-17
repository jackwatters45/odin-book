import { useState } from "react";

interface UseToggledStateProps {
	initialState?: boolean;
	delay?: number;
}

const useToggledState = ({
	initialState = false,
	delay = 0,
}: UseToggledStateProps): [boolean, () => void] => {
	const [isToggled, setIsToggled] = useState(initialState);

	const toggleState = () => setTimeout(() => setIsToggled((prev) => !prev), delay);

	return [isToggled, toggleState];
};

export default useToggledState;
