import { apiBaseUrl } from "@/config/envVariables";
import { IPost } from "@/types/IPost";
import { IUser } from "@/types/IUser";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useRef } from "react";
import { useParams } from "react-router";

const fileUploadFetch = async (formData: FormData, userId: string, queryEnd: string) => {
	const res = await fetch(`${apiBaseUrl}/users/${userId}/${queryEnd}`, {
		method: "PATCH",
		credentials: "include",
		body: formData,
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFileUpload = (queryEnd: string, fieldToUpdate: string) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleUploadClick = () => fileInputRef.current?.click();

	const { mutate } = useMutation({
		mutationKey: ["user", userId],
		mutationFn: (formData: FormData) => fileUploadFetch(formData, userId, queryEnd),
		onSuccess: (url: string) => {
			console.log("data", url);
			console.log("fieldToUpdate", fieldToUpdate);

			queryClient.setQueryData<IUser>(["user", userId], (prev) =>
				prev ? { ...prev, [fieldToUpdate]: url } : prev,
			);

			queryClient.setQueryData<IUser>(["currentUser"], (prev) =>
				prev ? { ...prev, [fieldToUpdate]: url } : prev,
			);

			if (queryEnd === "avatar-photo") {
				queryClient.setQueryData<InfiniteData<IPost[]>>(
					["user", userId, "posts"],
					(prev) => {
						if (!prev) return prev;

						const updatedPosts = prev.pages.map((posts) => {
							return posts.map((post) =>
								post.author._id === userId
									? { ...post, author: { ...post.author, avatarUrl: url } }
									: post,
							);
						});

						return {
							pages: updatedPosts,
							pageParams: prev.pageParams,
						};
					},
				);
			}
		},
	});

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const formData = new FormData();
			formData.append("file", file);

			mutate(formData);
			event.target.value = "";
		}
	};

	return {
		fileInputRef,
		handleUploadClick,
		handleFileChange,
	};
};

export default useFileUpload;
