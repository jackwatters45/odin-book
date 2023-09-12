import { Dispatch, SetStateAction, createContext } from "react";
import { FormError } from "../../../types/ErrorInterfaces";

interface ErrorContextProps {
	error: FormError | undefined;
	setError: Dispatch<SetStateAction<FormError | undefined>>;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export default ErrorContext;
