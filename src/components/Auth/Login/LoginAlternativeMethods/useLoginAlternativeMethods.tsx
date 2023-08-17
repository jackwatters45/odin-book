import { useLocation } from "react-router-dom";

const useLoginAlternativeMethods = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const error = params.get("error");

	let errorMessage;
	if (error === "emailAlreadyRegistered") {
		errorMessage =
			"This email is already registered using a different login method. Please use that method to log in.";
	} else if (error === "serverError") {
		errorMessage = "There was a problem with the server. Please try again later.";
	}

	return { errorMessage };
};

export default useLoginAlternativeMethods;
