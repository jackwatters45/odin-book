import { Dispatch, SetStateAction, useState } from "react";

type UseToggledStateReturn = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useToggledState = (initialState = false): UseToggledStateReturn => {
	const [isToggled, setIsToggled] = useState(initialState);

	const toggleState = () => setIsToggled((prev) => !prev);

	return [isToggled, toggleState, setIsToggled];
};

export default useToggledState;
