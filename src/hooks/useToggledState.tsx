import { useState } from "react";

const useToggledState = (): [boolean, () => void] => {
	const [isToggled, setIsToggled] = useState(false);
	const toggleState = () => setIsToggled((prev) => !prev);

	return [isToggled, toggleState];
};

export default useToggledState;
