import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";
import Login from "./Login";

describe("<Login />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login"]}>
				<Route path="/login" element={<Login />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the main title", () => {
		const title = screen.getByText("Odinbook");
		expect(title).toBeInTheDocument();
	});

	it("renders the description", () => {
		const description = screen.getByText(
			/Connect with friends and the world around you on Odinbook\./i,
		);
		expect(description).toBeInTheDocument();
	});

	it("renders the LoginForm component", () => {
		const emailOrUsernameField = screen.getByPlaceholderText(/Email or phone number/i);
		expect(emailOrUsernameField).toBeInTheDocument();

		const passwordField = screen.getByPlaceholderText(/Password/i);
		expect(passwordField).toBeInTheDocument();
	});

	it("renders the LoginAlternativeMethods component", () => {
		const facebookLogin = screen.getByAltText(/Login with Facebook/i);
		expect(facebookLogin).toBeInTheDocument();

		const googleLogin = screen.getByAltText(/Login with Google/i);
		expect(googleLogin).toBeInTheDocument();

		const githubLogin = screen.getByAltText(/Login with Github/i);
		expect(githubLogin).toBeInTheDocument();
	});

	it("renders the LoginGuest component", () => {
		const guestLoginButton = screen.getByText(/Login as a guest/i);
		expect(guestLoginButton).toBeInTheDocument();
	});
});
