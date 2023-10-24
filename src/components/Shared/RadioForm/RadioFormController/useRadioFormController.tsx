import { RadioFormOptions } from "../types/RadioFormTypes";

interface UseRadioFormControllerProps {
	options?: RadioFormOptions;
}

const useRadioFormController = ({ options }: UseRadioFormControllerProps) => {
	const getSelectedOptionIcon = (currentTitle: string) => {
		return options?.find(({ title }) => {
			return currentTitle === title;
		})?.icon;
	};

	return {
		getSelectedOptionIcon,
	};
};

export default useRadioFormController;
