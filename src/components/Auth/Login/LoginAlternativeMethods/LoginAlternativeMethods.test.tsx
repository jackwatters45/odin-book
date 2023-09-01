import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import { apiBaseUrl } from "@/config/envVariables";
import TestEnvironmentWrapper from "@/config/tests/Utils/setupRender";
import LoginAlternativeMethods from ".";

describe("LoginAlternativeMethods", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login"]}>
				<Route path="/login" element={<LoginAlternativeMethods />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders correctly", () => {
		// Check if the static texts are rendered
		expect(screen.getByText("Or continue with")).toBeInTheDocument();
		expect(screen.getByAltText("login with facebook")).toBeInTheDocument();
		expect(screen.getByAltText("login with google")).toBeInTheDocument();
		expect(screen.getByAltText("login with github")).toBeInTheDocument();
	});

	it("has correct links to alternative login methods", () => {
		// Check if the links are correctly formed
		expect(screen.getByAltText("login with facebook").closest("a")).toHaveAttribute(
			"href",
			`${apiBaseUrl}/auth/login/facebook`,
		);
		expect(screen.getByAltText("login with google").closest("a")).toHaveAttribute(
			"href",
			`${apiBaseUrl}/auth/login/google`,
		);
		expect(screen.getByAltText("login with github").closest("a")).toHaveAttribute(
			"href",
			`${apiBaseUrl}/auth/login/github`,
		);
	});

	it("displays the correct error message for emailAlreadyRegistered", () => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login?error=emailAlreadyRegistered"]}>
				<Route path="/login" element={<LoginAlternativeMethods />} />
			</TestEnvironmentWrapper>,
		);

		const expectedMessage =
			"This email is already registered using a different login method. Please use that method to log in.";
		expect(screen.getByText(expectedMessage)).toBeInTheDocument();
	});

	it("displays the correct error message for serverError", () => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login?error=serverError"]}>
				<Route path="/login" element={<LoginAlternativeMethods />} />
			</TestEnvironmentWrapper>,
		);

		const expectedMessage =
			"There was a problem with the server. Please try again later.";
		expect(screen.getByText(expectedMessage)).toBeInTheDocument();
	});
});
