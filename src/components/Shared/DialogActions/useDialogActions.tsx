interface UseBottomControlsParams<T> {
	initial: T | undefined;
	unsavedValue: T | undefined;
}

const useDialogActions = <T,>({ initial, unsavedValue }: UseBottomControlsParams<T>) => {
	const isChanged = (() => {
		if (initial === undefined || unsavedValue === undefined) {
			return false;
		} else if (Array.isArray(initial) && Array.isArray(unsavedValue)) {
			return JSON.stringify(initial.sort()) !== JSON.stringify(unsavedValue.sort());
		} else if (typeof initial === "string" && typeof unsavedValue === "string") {
			return initial !== unsavedValue;
		} else {
			return initial !== unsavedValue;
		}
	})();

	return {
		isChanged,
	};
};

export default useDialogActions;
