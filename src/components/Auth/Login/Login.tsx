import LoginAlternativeMethods from "./LoginAlternativeMethods";
import LoginForm from "./LoginForm";
import LoginGuest from "./LoginGuest";
import {
	AuthRouteContainer,
	StyledAuthContainer,
	StyledAuthForm,
	StyledHeadingColumn,
} from "../styles/SharedAuthStyles";

const Login = () => {
	return (
		<AuthRouteContainer>
			<StyledAuthContainer>
				<StyledHeadingColumn>
					<h1>Odinbook</h1>
					<p>Connect with friends and the world around you on Odinbook.</p>
				</StyledHeadingColumn>
				<StyledAuthForm>
					<LoginForm />
					<LoginAlternativeMethods />
					<LoginGuest />
				</StyledAuthForm>
			</StyledAuthContainer>
		</AuthRouteContainer>
	);
};

export default Login;
