import { apiBaseUrl } from "@/config/envVariables";
import useLoginAlternativeMethods from "./useLoginAlternativeMethods";
import {
	StyledAlternativeMethod,
	StyledAlternativeMethodContainer,
	StyledAlternativeMethodsContainer,
	StyledAlternativeMethodsHeader,
} from "./LoginAlternativeMethods.styles";

const LoginAlternativeMethods = () => {
	const { errorMessage } = useLoginAlternativeMethods();

	return (
		<StyledAlternativeMethodsContainer>
			<StyledAlternativeMethodsHeader>Or continue with?</StyledAlternativeMethodsHeader>
			<StyledAlternativeMethodContainer>
				<StyledAlternativeMethod>
					<a href={`${apiBaseUrl}/auth/login/facebook`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
							alt="login with facebook"
							style={{ width: "2.5rem" }}
						/>
					</a>
				</StyledAlternativeMethod>
				<StyledAlternativeMethod>
					<a href={`${apiBaseUrl}/auth/login/google`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
							alt="login with google"
							style={{ width: "2.5rem" }}
						/>
					</a>
				</StyledAlternativeMethod>
				<StyledAlternativeMethod>
					<a href={`${apiBaseUrl}/auth/login/github`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="login with github"
							style={{ width: "2.5rem" }}
						/>
					</a>
				</StyledAlternativeMethod>
			</StyledAlternativeMethodContainer>
			{errorMessage && <div className="formErrors">{errorMessage}</div>}
		</StyledAlternativeMethodsContainer>
	);
};

export default LoginAlternativeMethods;
