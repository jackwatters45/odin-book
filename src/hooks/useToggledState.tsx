import { useState } from "react";

type UseToggledStateReturn = [boolean, () => void];

const useToggledState = (initialState = false): UseToggledStateReturn => {
	const [isToggled, setIsToggled] = useState(initialState);

	const toggleState = () => setIsToggled((prev) => !prev);

	return [isToggled, toggleState];
};

export default useToggledState;
