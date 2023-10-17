import { RadioFormOption } from "../RadioForm";

interface UseRadioFormControllerProps {
	options?: RadioFormOption[];
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
