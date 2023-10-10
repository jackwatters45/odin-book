import { ReactNode } from "react";
import {
	AuthRouteContainer,
	StyledAuthContainer,
	StyledAuthForm,
	StyledHeadingColumn,
} from "./AuthRoutesWrapper.styles";

interface AuthRoutesWrapperProps {
	children: ReactNode;
}

const AuthRoutesWrapper = ({ children }: AuthRoutesWrapperProps) => {
	return (
		<AuthRouteContainer>
			<StyledAuthContainer>
				<StyledHeadingColumn>
					<h1>Odinbook</h1>
					<p>Connect with friends and the world around you on Odinbook.</p>
				</StyledHeadingColumn>
				<StyledAuthForm>{children}</StyledAuthForm>
			</StyledAuthContainer>
		</AuthRouteContainer>
	);
};

export default AuthRoutesWrapper;
