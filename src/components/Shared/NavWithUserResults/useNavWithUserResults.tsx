import useWindowWidth from "@/hooks/useWindowWidth";

const useNavWithUserResults = () => {
	const windowWidth = useWindowWidth();

	const isPreview = windowWidth >= 768;

	return { isPreview };
};

export default useNavWithUserResults;
