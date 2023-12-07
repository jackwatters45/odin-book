import useDialogsContext from "@/hooks/dialogs/useDialogsContext";

const usePostPhotos = (mediaLength: number) => {
	const showNumHiddenPhotos = mediaLength > 5;

	const { closeAllDialogs } = useDialogsContext();

	return {
		showNumHiddenPhotos,
		closeAllDialogs,
	};
};

export default usePostPhotos;
