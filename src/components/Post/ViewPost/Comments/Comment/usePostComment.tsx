import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IComment } from "@/types/IComment";
import useCommentQuery from "@/hooks/reactQuery/useCommentQuery";

interface UsePostCommentProps {
	comment: IComment;
	postId: string;
	sort: string;
}

const usePostComment = ({ comment, postId, sort }: UsePostCommentProps) => {
	const currentUser = useCurrentUserCached();

	const { fetchReplies, editCommentQuery } = useCommentQuery(postId);

	// show more options
	const isOwnComment = currentUser?._id === comment.author._id;
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const handleMouseEnter = () => {
		if (isOwnComment) setShowMoreOptions(true);
	};

	const handleMouseLeave = () => {
		if (isOwnComment) setShowMoreOptions(false);
	};

	// show replies
	const replyInputRef = useRef<HTMLInputElement>(null);
	const focusReplyInput = () => replyInputRef.current?.focus();

	const [isDisplayingReplies, setIsDisplayingReplies] = useState(false);

	const {
		data: repliesData,
		isLoading,
		refetch,
	} = useQuery<IComment[]>({
		queryKey: ["post", postId, "comment", comment._id, "replies"],
		queryFn: () => fetchReplies(postId, comment._id),
		enabled: false,
	});

	const showReplies = async () => await refetch();

	const handleShowReplies = () => {
		if (isDisplayingReplies) return;
		setIsDisplayingReplies(true);
		showReplies();
	};

	const handleClickReply = () => {
		handleShowReplies();
		setTimeout(focusReplyInput, 250);
	};

	// edit comment input ref
	const editCommentRef = useRef<HTMLInputElement>(null);
	const focusEditComment = () => editCommentRef.current?.focus();

	// edit comment form
	const { handleSubmit, setValue, watch, reset } = useForm({
		defaultValues: { content: comment.content },
	});

	const commentValue = watch("content");

	// edit comment
	const [isEditingComment, setIsEditingComment] = useState(false);
	const showEditCommentForm = () => {
		setIsEditingComment(true);
		setTimeout(focusEditComment, 0);
	};
	const hideEditCommentForm = () => {
		setIsEditingComment(false);
		reset();
	};

	// edit comment query
	const { mutate: editComment } = useMutateCustom({
		queryUrl: `posts/${postId}/comments/${comment._id}`,
		method: "PATCH",
		onSuccessFn: editCommentQuery,
	});

	// edit form handlers
	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
		setValue("content", e.target.value);

	const onSubmit = handleSubmit((data) => {
		editComment({ data }, { onSuccess: hideEditCommentForm });
	});

	// is reply
	const isReply = !!comment.parentComment;

	const sortedReplies = useMemo(() => {
		return sort === "Most relevant"
			? repliesData?.sort((a, b) => {
					//reactions (most first)
					const reactionsDiff = b.reactions.length - a.reactions.length;
					if (reactionsDiff !== 0) return reactionsDiff;

					// replies (most first)
					const repliesDiff = b.replies.length - a.replies.length;
					if (repliesDiff !== 0) return repliesDiff;

					// created at (newest first)
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			  })
			: repliesData?.sort(
					(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			  );
	}, [repliesData, sort]);

	return {
		editCommentRef,
		showMoreOptions,
		handleMouseEnter,
		handleMouseLeave,
		isEditingComment,
		showEditCommentForm,
		onSubmit,
		commentValue,
		handleChangeInput,
		isDisplayingReplies,
		isLoading,
		sortedReplies,
		isReply,
		replyInputRef,
		handleClickReply,
		handleShowReplies,
	};
};

export default usePostComment;
