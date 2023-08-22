import { describe, it, expect, beforeEach, vi, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { faker } from "@faker-js/faker";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import FindYourAccount from "./FindYourAccount";

// mock fetch
window.fetch = vi
	.fn()
	.mockResolvedValue(Promise.resolve(new Response(JSON.stringify({}))));

// mock useNavigate hook
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
	const actual = (await vi.importActual(
		"react-router-dom",
	)) as typeof import("react-router-dom");
	return {
		...actual,
		useNavigate: () => mockNavigate,
	};
});

describe("<FindYourAccount />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover"]}>
				<Route path="/recover">
					<Route index element={<FindYourAccount />} />
					<Route path="method" element={<>method</>} />
				</Route>

				<Route path="/login" element={<div>login component</div>} />
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
		const input = screen.getAllByPlaceholderText("Email or phone number");

		expect(input).toHaveLength(2);
	});

	it("renders the Cancel button", () => {
		const cancelButton = screen.getByText("Cancel");
		expect(cancelButton).toBeInTheDocument();
	});

	it("renders the Search button", () => {
		const searchButton = screen.getByText("Search");
		expect(searchButton).toBeInTheDocument();
	});

	it("renders the code input error", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Search"));

		expect(
			await screen.findByText("Email or phone number is required"),
		).toBeInTheDocument();
	});

	it("render form error", async () => {
		vi.spyOn(window, "fetch").mockResolvedValueOnce(
			new Response(JSON.stringify({ message: "Test Error" }), { status: 400 }),
		);

		const user = userEvent.setup();

		const input = await screen.findAllByPlaceholderText("Email or phone number");
		const findInput = input[1];
		await user.click(findInput);
		await user.type(findInput, "email@email.com");

		await user.click(screen.getByText("Search"));

		expect(await screen.findByText("Test Error")).toBeInTheDocument();
	});

	it("clicking cancel button redirects to /login", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Cancel"));

		expect(screen.getByText("login component")).toBeInTheDocument();
	});

	it("clicking search button redirects to /recover/initiate", async () => {
		const fakeEmail = faker.internet.email();

		const user = userEvent.setup();

		const input = screen.getAllByPlaceholderText("Email or phone number")[1];

		await user.type(input, fakeEmail);

		await user.click(screen.getByText("Search"));

		expect(screen.getByText("method")).toBeInTheDocument();
	});
});

afterAll(() => {
	vi.resetAllMocks();
});
