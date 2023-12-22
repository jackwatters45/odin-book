import { useEffect, useRef, useState } from "react";

import useFormCustom from "@/hooks/reactQuery/useFormCustom";
import { PostFormValues } from "./types/PostFormTypes";
import useToggledState from "@/hooks/misc/useToggledState";
import { PhotoPreviews } from "./AddToPost/Photo/types/PhotoTypes";
import usePostFormContext from "./context/usePostFormContext";
import usePostFormQuery from "./hooks/usePostFormQuery";
import { IPost } from "@/types/IPost";
import useError from "@/components/Errors/useError";
import { isEqual } from "lodash";

const usePostForm = () => {
	// error popup
	const { setError } = useError();

	// dialog
	const { ref, closeDialog, initialOpenedState, initialValues, isEditing } =
		usePostFormContext();

	// submit state
	const [isSubmitting, setIsSubmitting] = useState(false);

	// use form
	const PostForm = usePostFormQuery(initialValues ? "edit" : "create");

	const postId = initialValues?._id;
	const { control, setValue, watch, mutate, handleSubmit } =
		useFormCustom<PostFormValues>({
			mutateOptions: {
				queryUrl: postId ? `posts/${postId}` : "posts",
				method: postId ? "PATCH" : "POST",
				onSuccessFn: (data) => {
					PostForm(data);
					closeDialog();
				},
			},
			formOptions: {
				defaultValues: {
					_id: initialValues?._id,
					audience: initialValues?.audience || "Friends",
					content: initialValues?.content,
					feeling: initialValues?.feeling,
					taggedUsers: initialValues?.taggedUsers || [],
					media: initialValues?.media || [],
					unsavedMedia: [],
					sharedFrom: (initialValues?.sharedFrom as IPost)?._id || "",
					to: {
						_id: initialValues?.to?._id,
						fullName: initialValues?.to?.fullName,
					},
					checkIn: initialValues?.checkIn || {},
				},
			},
		});

	const submitForm = handleSubmit((data) => {
		const isChanged = !isEqual(data, initialValues);
		if (!isChanged) return closeDialog();

		const formData = new FormData();

		formData.append("audience", data.audience);

		if (data.content) formData.append("content", data.content);
		if (data.feeling) formData.append("feeling", data.feeling);
		if (data.to?._id) formData.append("to", data.to?._id);
		if (data.sharedFrom) formData.append("sharedFrom", data.sharedFrom);

		data.taggedUsers?.forEach((user) => formData.append("taggedUsers[]", user._id));

		data.media?.forEach((media) => formData.append("media[]", media));
		data.unsavedMedia?.forEach((media) => formData.append("unsavedMedia[]", media));

		if (data.checkIn?.location)
			formData.append("checkIn.location", data.checkIn?.location);
		if (data.checkIn?.city) formData.append("checkIn.city", data.checkIn?.city);
		if (data.checkIn?.state) formData.append("checkIn.state", data.checkIn?.state);
		if (data.checkIn?.country) formData.append("checkIn.country", data.checkIn?.country);

		setIsSubmitting(true);

		mutate(
			{ data: formData },
			{
				onSuccess: () => closeDialog(),
				onError: (res) => setError(res.message),
			},
		);
	});

	const formValues = watch();

	// other forms state
	const [isTaggingUsers, toggleIsTaggingUsers] = useToggledState(
		initialOpenedState === "tag",
	);

	const [isAddingFeeling, toggleIsAddingFeeling] = useToggledState(
		initialOpenedState === "feeling",
	);

	const [isCheckingIn, toggleIsCheckingIn] = useToggledState(
		initialOpenedState === "checkIn",
	);

	const [photoPreviews, setPhotoPreviews] = useState<PhotoPreviews>([]);

	// animate previous button
	const otherFormsRef = useRef({
		isTaggingUsers,
		isAddingFeeling,
		isCheckingIn,
	});

	const [isPreviousDefault, setIsPreviousDefault] = useState(true);
	useEffect(() => {
		const otherForms = otherFormsRef.current;

		setIsPreviousDefault(
			!otherForms.isTaggingUsers &&
				!otherFormsRef.current?.isAddingFeeling &&
				!otherFormsRef.current?.isCheckingIn,
		);

		otherFormsRef.current = {
			isTaggingUsers,
			isAddingFeeling,
			isCheckingIn,
		};
	}, [isTaggingUsers, isAddingFeeling, isCheckingIn]);

	return {
		ref,
		closeDialog,
		initialOpenedState,
		isEditing,
		initialValues,
		isSubmitting,
		control,
		setValue,
		submitForm,
		formValues,
		isTaggingUsers,
		toggleIsTaggingUsers,
		isAddingFeeling,
		toggleIsAddingFeeling,
		isCheckingIn,
		toggleIsCheckingIn,
		photoPreviews,
		setPhotoPreviews,
		isPreviousDefault,
	};
};

export default usePostForm;
