import AuthRoutesWrapper from "../Shared/AuthRoutesWrapper";
import LoginAlternativeMethods from "./LoginAlternativeMethods";
import LoginForm from "./LoginForm";
import LoginGuest from "./LoginGuest";

const Login = () => {
	return (
		<AuthRoutesWrapper>
			<LoginForm />
			<LoginAlternativeMethods />
			<LoginGuest />
		</AuthRoutesWrapper>
	);
};

export default Login;
