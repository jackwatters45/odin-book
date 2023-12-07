import useWindowWidth from "@/hooks/dom/useWindowWidth";

const useNavWithUserResults = () => {
	const windowWidth = useWindowWidth();

	const isPreview = windowWidth >= 768;

	return { isPreview };
};

export default useNavWithUserResults;
