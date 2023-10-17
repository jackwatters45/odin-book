import { useEffect, useRef, useState } from "react";

import useFormCustom from "@/hooks/useFormCustom";
import { CreatePostFormValues } from "./types/CreatePostTypes";
import useToggledState from "@/hooks/useToggledState";
import { PhotoPreviews } from "./AddToPost/Photo/types/PhotoTypes";
import useCreatePostContext from "./context/useCreatePostContext";

const useCreatePost = () => {
	// dialog
	const { ref, closeDialog, initialOpenedState, initialValues } = useCreatePostContext();

	console.log("initialOpenedState", initialOpenedState);

	// use form
	const { control, setValue, register, watch, mutate, handleSubmit } =
		useFormCustom<CreatePostFormValues>({
			mutateOptions: { queryUrl: "posts", method: "POST" },
			formOptions: {
				defaultValues: {
					audience: initialValues?.audience || "Friends",
					content: initialValues?.content || "",
					feeling: initialValues?.feeling || "",
					taggedUsers: initialValues?.taggedUsers || [],
					media: initialValues?.media || [],
					checkIn: {
						location: initialValues?.checkIn?.location || "",
						city: initialValues?.checkIn?.city || "",
						state: initialValues?.checkIn?.state || "",
						country: initialValues?.checkIn?.country || "",
					},
				},
			},
		});

	const submitForm = handleSubmit((data) => {
		const formData = new FormData();

		formData.append("content", data.content);
		formData.append("audience", data.audience);
		formData.append("feeling", data.feeling);

		data.taggedUsers.forEach((user) => formData.append("taggedUsers[]", user._id));

		data.media.forEach((media) => formData.append("media[]", media));

		formData.append("checkIn.location", data.checkIn.location);
		formData.append("checkIn.city", data.checkIn.city);
		formData.append("checkIn.state", data.checkIn.state);
		formData.append("checkIn.country", data.checkIn.country);

		mutate({ data: formData }); // , { onSuccess: () => closeDialog() });
	});

	const formValues = watch();

	// other forms state
	const [isTaggingUsers, toggleIsTaggingUsers, setIsTaggingUsers] = useToggledState();

	const [isAddingFeeling, toggleIsAddingFeeling, setIsAddingFeeling] = useToggledState();

	const [isCheckingIn, toggleIsCheckingIn, setIsCheckingIn] = useToggledState();

	useEffect(() => {
		setIsTaggingUsers(initialOpenedState === "tag");
		setIsAddingFeeling(initialOpenedState === "feeling");
		setIsCheckingIn(initialOpenedState === "checkIn");
	}, [initialOpenedState, setIsTaggingUsers, setIsAddingFeeling, setIsCheckingIn]);

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
		control,
		setValue,
		register,
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

export default useCreatePost;
