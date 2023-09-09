import LoginAlternativeMethods from "./LoginAlternativeMethods";
import LoginForm from "./LoginForm";
import LoginGuest from "./LoginGuest";

const Login = () => {
	return (
		<div>
			<div>
				<h1>Odinbook</h1>
				<p>Connect with friends and the world around you on Odinbook.</p>
			</div>
			<div>
				<LoginForm />
				<LoginAlternativeMethods />
				<LoginGuest />
			</div>
		</div>
	);
};

export default Login;
