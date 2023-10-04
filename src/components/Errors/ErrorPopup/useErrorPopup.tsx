import { useEffect, useRef } from "react";
import useError from "../useError";
import renderFormErrors from "../../../utils/render/renderFormErrors";

const useErrorPopup = () => {
	const { setError, error } = useError();

	const ref = useRef<HTMLDialogElement>(null);
	const closePopup = () => ref.current?.close();

	useEffect(() => {
		if (error) ref.current?.show();
	}, [error]);

	useEffect(() => {
		const timer = setTimeout(() => {
			closePopup();
			setError("");
		}, 10000);

		return () => clearTimeout(timer);
	}, [error, setError]);

	const renderErrorMessage = () => {
		if (!error) return <span>An unexpected error has occurred.</span>;
		if (typeof error === "string" && error.startsWith("Unexpected token")) {
			return <span>An unexpected error has occurred.</span>;
		}

		return <span>{renderFormErrors(error)}</span>;
	};

	return { ref, closePopup, renderErrorMessage };
};

export default useErrorPopup;
