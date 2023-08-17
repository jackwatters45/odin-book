import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import FindYourAccount from "./FindYourAccount";

describe("<FindYourAccount />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login/recover"]}>
				<Route path="/login/recover" element={<FindYourAccount />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the heading", () => {
		const heading = screen.getByText("Find your account");
		expect(heading).toBeInTheDocument();
	});

	it("renders the description", () => {
		const description = screen.getByText(
			"Please enter your email or mobile number to search for your account.",
		);
		expect(description).toBeInTheDocument();
	});

	it("renders the input for email or phone number", () => {
		const input = screen.getByPlaceholderText("Email or phone number");
		expect(input).toBeInTheDocument();
	});

	it("renders the Cancel button", () => {
		const cancelButton = screen.getByText("Cancel");
		expect(cancelButton).toBeInTheDocument();
	});

	it("renders the Search button", () => {
		const searchButton = screen.getByText("Search");
		expect(searchButton).toBeInTheDocument();
	});

	it("clicking cancel button redirects to /login", async () => {
		await userEvent.click(screen.getByText("Cancel"));

		expect(screen.getByText("Email or phone number:")).toBeInTheDocument();
	});

	it("clicking search button redirects to /login/recover/initiate", async () => {
		await userEvent.click(screen.getByText("Search"));

		expect(screen.getByText("We'll send you a code to your")).toBeInTheDocument();
	});
});
