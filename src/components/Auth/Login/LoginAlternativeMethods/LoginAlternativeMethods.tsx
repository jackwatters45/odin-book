import { apiBaseUrl } from "../../../../../config/envVariables";
import useLoginAlternativeMethods from "./useLoginAlternativeMethods";

const LoginAlternativeMethods = () => {
	const { errorMessage } = useLoginAlternativeMethods();

	return (
		<div>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-gray-300"></div>
				</div>
				<div className="relative flex justify-center text-sm">
					<p className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
						Or continue with
					</p>
				</div>
			</div>
			<div>
				<button>
					<a href={`${apiBaseUrl}/auth/login/facebook`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
							alt="login with facebook"
						/>
					</a>
				</button>
				<button>
					<a href={`${apiBaseUrl}/auth/login/google`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
							alt="login with google"
						/>
					</a>
				</button>
				<button>
					<a href={`${apiBaseUrl}/auth/login/github`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="login with github"
						/>
					</a>
				</button>
			</div>
			{errorMessage && <div className="formErrors">{errorMessage}</div>}
		</div>
	);
};

export default LoginAlternativeMethods;
