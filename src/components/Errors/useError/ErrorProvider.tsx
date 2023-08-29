import { ReactNode, useState } from "react";
import ErrorContext from "./ErrorContext";
import ErrorPopup from "../ErrorPopup";
import { FormError } from "../../../../types/ErrorInterfaces";

interface ErrorProviderProps {
	children: ReactNode;
}

const ErrorProvider = ({ children }: ErrorProviderProps) => {
	const [error, setError] = useState<FormError | undefined>();

	return (
		<ErrorContext.Provider value={{ error, setError }}>
			{children}
			{error && <ErrorPopup error={error} />}
		</ErrorContext.Provider>
	);
};

export default ErrorProvider;
