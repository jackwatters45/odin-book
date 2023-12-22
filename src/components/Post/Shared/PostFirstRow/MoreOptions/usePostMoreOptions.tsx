import { useForm } from "react-hook-form";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";
import useRadioForm from "@/components/Shared/RadioForm/useRadioForm";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { IPost } from "@/types/IPost";
import { IUser } from "@/types/IUser";
import { AudienceFormValues } from "./EditAudienceForm/types/EditAudienceTypes";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";
import { INotification } from "@/components/Notifications/types/NotificationType";

interface usePostMoreOptionsProps {
	post: IPost;
}

type InfinitePostsResults = InfiniteData<IPost[]>;

const removeNotificationsRelatedToPost = (
	prevData: InfiniteData<INotification[]> | undefined,
	postToDeleteId: string,
) =>
	prevData
		? {
				pages: prevData.pages.map((page) =>
					page.filter((n) => n.postId !== postToDeleteId),
				),
				pageParams: prevData.pageParams,
		  }
		: prevData;

const usePostMoreOptions = ({ post }: usePostMoreOptionsProps) => {
	const currentUser = useCurrentUserCached();
	const queryClient = useQueryClient();

	const { closeAllDialogs } = useDialogsContext();

	// basic checks
	const isOwnPost = currentUser?._id === post.author._id;
	const isPostSaved = currentUser?.savedPosts.includes(post._id);

	// save post
	const { mutate: savePost } = useMutateCustom({
		queryUrl: `posts/${post._id}/save`,
		method: "PATCH",
		onSuccessFn: (savedPosts: string[]) => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				prevData ? { ...prevData, savedPosts } : prevData,
			);
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
			queryClient.setQueryData<InfinitePostsResults>(
				["user", post.author._id, "posts"],
				(prevData) => {
					if (!prevData) return prevData;
					const updatedPages = prevData.pages.map((page) =>
						page.map((p) => (p._id === post._id ? { ...p, audience: data.audience } : p)),
					);

					return {
						pages: updatedPages,
						pageParams: prevData.pageParams,
					};
				},
			);

			queryClient.setQueryData<IPost>(["post", post._id], (prevData) => {
				return prevData ? { ...prevData, audience: data.audience } : prevData;
			});
		},
	});
	const submitForm = handleSubmit((data) => updateAudience({ data }));

	// delete post
	const { mutate: deletePost } = useMutateCustom({
		queryUrl: `posts/${post._id}`,
		method: "DELETE",
		onSuccessFn: () => {
			// close form
			closeAllDialogs();

			// query updates
			queryClient.setQueryData<InfinitePostsResults>(
				["user", post.author._id, "posts"],
				(prev) => {
					if (!prev) return prev;
					const pages = prev?.pages.map((page) => {
						return page.filter((p) => p._id !== post._id);
					});

					return {
						pages,
						pageParams: prev?.pageParams,
					};
				},
			);

			const hasMedia = !!post?.media?.length;
			if (hasMedia) {
				queryClient.invalidateQueries<InfinitePostsResults>([
					"user",
					post.author._id,
					"photos-of",
					9,
				]);
			}

			queryClient.setQueryData<InfiniteData<INotification[]>>(
				["me", "notifications", "all"],
				(prevData) => removeNotificationsRelatedToPost(prevData, post._id),
			);

			queryClient.setQueryData<InfiniteData<INotification[]>>(
				["me", "notifications", "unread"],
				(prevData) => removeNotificationsRelatedToPost(prevData, post._id),
			);

			// if post is shared, update shared post count in original post
			const isSharedPost = !!post.sharedFrom;
			if (isSharedPost) {
				queryClient.setQueryData<IPost>(["post", post.sharedFrom?._id], (prevData) => {
					return prevData
						? { ...prevData, shareCount: prevData.shareCount - 1 }
						: prevData;
				});

				const updatePostsShareCount = (prevData: InfinitePostsResults | undefined) => {
					if (!prevData) return prevData;
					const updatedPages = prevData.pages.map((page) =>
						page.map((p) => {
							return p._id === post.sharedFrom?._id
								? { ...p, shareCount: p.shareCount - 1 }
								: p;
						}),
					);

					return {
						pages: updatedPages,
						pageParams: prevData.pageParams,
					};
				};

				queryClient.setQueryData<InfinitePostsResults>(
					["posts", currentUser?._id],
					(prevData) => updatePostsShareCount(prevData),
				);

				queryClient.setQueryData<InfinitePostsResults>(
					["user", post.author._id, "posts"],
					(prevData) => updatePostsShareCount(prevData),
				);
			}
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
