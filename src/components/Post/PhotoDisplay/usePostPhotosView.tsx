import { apiBaseUrl } from "@/config/envVariables";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const fetchPostPhotos = async (postId: string) => {
	const res = await fetch(`${apiBaseUrl}/posts/${postId}/photos`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const usePostPhotosView = () => {
	const { id: postId } = useParams<{ id: string }>() as { id: string };

	const { data: photos, isLoading } = useQuery({
		queryKey: ["post", postId, "photos"],
		queryFn: () => fetchPostPhotos(postId),
	});

	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
	const handlePrevPhoto = () =>
		setCurrentPhotoIndex((prev) => (prev === 0 ? photos?.length - 1 : prev - 1));

	const handleNextPhoto = () =>
		setCurrentPhotoIndex((prev) => (prev === photos?.length - 1 ? 0 : prev + 1));

	const currentPhoto = photos?.[currentPhotoIndex];

	// Go back
	const navigate = useNavigate();
	const goBack = useCallback(() => navigate(-1), [navigate]);

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") goBack();
		};

		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [navigate, goBack]);

	// Check if there are photos when loading is done
	useEffect(() => {
		if (isLoading || !!photos.length) return;
		goBack();
	}, [isLoading, photos, goBack]);

	return { currentPhoto, isLoading, goBack, handlePrevPhoto, handleNextPhoto };
};

export default usePostPhotosView;
