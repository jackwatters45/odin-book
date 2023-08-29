import { useEffect, useRef } from "react";

const useErrorPopup = (error?: unknown) => {
	const ref = useRef<HTMLDialogElement>(null);
	const closePopup = () => ref.current?.close();

	useEffect(() => {
		if (error) ref.current?.showModal();
	}, [error]);

	useEffect(() => {
		const timer = setTimeout(() => {
			closePopup();
		}, 10000);

		return () => clearTimeout(timer);
	}, [error]);

	return { ref, closePopup };
};

export default useErrorPopup;
