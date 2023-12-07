import { IPost } from "@/types/IPost";
import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";

interface UsePostSocialShareProps {
	post: IPost;
}

const usePostSocialShare = ({ post }: UsePostSocialShareProps) => {
	const { openDialog } = usePostFormContext();
	const handleClickShare = () =>
		openDialog({
			initialValues: { sharedFrom: post, audience: "Friends" },
			initialOpenedState: "share",
		});

	return { handleClickShare };
};

export default usePostSocialShare;
