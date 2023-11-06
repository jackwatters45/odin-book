import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";
import useRadioForm from "@/components/Shared/RadioForm/useRadioForm";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IPost } from "@/types/IPost";
import { IUser } from "@/types/IUser";
import { AudienceFormValues } from "./EditAudienceForm/types/EditAudienceTypes";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";

interface usePostMoreOptionsProps {
	post: IPost;
}

const usePostMoreOptions = ({ post }: usePostMoreOptionsProps) => {
	const currentUser = useCurrentUserCached();
	const queryClient = useQueryClient();

	// basic checks
	const isOwnPost = currentUser?._id === post.author._id;
	const isPostSaved = currentUser?.savedPosts.includes(post._id);

	// save post
	const { mutate: savePost } = useMutateCustom({
		queryUrl: `posts/${post._id}/save`,
		method: "PATCH",
		onSuccessFn: (savedPosts: string[]) => {
			const currentData = (queryClient.getQueryData(["currentUser"]) as IUser) || {};

			const updatedUser = { ...currentData, savedPosts };
			queryClient.setQueryData(["currentUser"], updatedUser);
		},
	});
	const handleClickSavePost = () => savePost({});

	// edit post
	const { openDialog: openEditPostForm } = usePostFormContext();
	const handleOpenEditPost = () =>
		openEditPostForm({
			initialOpenedState: undefined,
			initialValues: post,
			isEditing: true,
		});

	// edit audience
	const { setValue, handleSubmit, reset } = useForm({
		defaultValues: { audience: post.audience },
	});

	const {
		ref: audienceFormRef,
		openDialog: openEditAudience,
		...rest
	} = useRadioForm<AudienceFormValues>({
		initial: post.audience,
		formField: "audience",
		setValue,
	});

	const handleOpenEditAudience = () => {
		openEditAudience();
		reset({ audience: post.audience });
	};

	const { mutate: updateAudience } = useMutateCustom({
		queryUrl: `posts/${post._id}/audience`,
		method: "PATCH",
		onSuccessFn: (data: AudienceFormValues) => {
			const currentData =
				(queryClient.getQueryData(["user", post.author._id, "posts"]) as IPost[]) || [];

			const updatedData = currentData.map((p) =>
				p._id === post._id ? { ...p, audience: data.audience } : p,
			);

			queryClient.setQueryData(["user", post.author._id, "posts"], updatedData);
		},
	});
	const submitForm = handleSubmit((data) => updateAudience({ data }));

	// delete post
	const { mutate: deletePost } = useMutateCustom({
		queryUrl: `posts/${post._id}`,
		method: "DELETE",
		onSuccessFn: () => {
			const currentData =
				(queryClient.getQueryData(["user", post.author._id, "posts"]) as IPost[]) || [];

			const updatedData = currentData.filter((p) => p._id !== post._id);
			queryClient.setQueryData(["user", post.author._id, "posts"], updatedData);
		},
	});
	const handleDeletePost = () => deletePost({});

	// open post
	const { openDialog } = useViewPostContext();
	const handleOpenViewPost = () =>
		openDialog({ postId: post._id, authorName: post.author.fullName });

	return {
		isOwnPost,
		isPostSaved,
		handleClickSavePost,
		handleOpenEditPost,
		handleOpenEditAudience,
		handleDeletePost,
		handleOpenViewPost,
		audienceFormRef,
		audienceFormProps: { ...rest, submitForm },
	};
};

export default usePostMoreOptions;
