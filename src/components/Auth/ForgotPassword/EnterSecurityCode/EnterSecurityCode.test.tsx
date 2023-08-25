import { describe, it, expect, beforeEach, vi, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import * as ReactRouter from "react-router";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import EnterSecurityCode from ".";

// mock successful fetch
window.fetch = vi
	.fn()
	.mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify({}))));

vi.mock("react-router", async () => ({
	...((await vi.importActual("react-router")) as typeof import("react-router")),
	useLocation: () => ({
		state: { data: { userId: "email@email.com" } },
		key: "default",
		pathname: "/recover/method",
		search: "",
		hash: "",
	}),
}));

describe("<ResetPasswordMethod />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover/code"]}>
				<Route path="/login" element={<>login</>} />
				<Route path="/recover">
					<Route path="method" element={<>reset password method</>} />
					<Route path="code" element={<EnterSecurityCode />} />
					<Route path="password" element={<>reset password</>} />
				</Route>
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the heading", async () => {
		expect(screen.getByText("Enter security code")).toBeInTheDocument();
	});

	it("renders the description for email", async () => {
		expect(
			screen.getByText(
				"Please check your email for a message with your code. Your code is 6 characters long.",
			),
		).toBeInTheDocument();
	});

	it("renders the description for phone number", async () => {
		vi.spyOn(ReactRouter, "useLocation").mockReturnValue({
			state: { data: { userId: "+15555555555" } },
			key: "default",
			pathname: "/recover/method",
			search: "",
			hash: "",
		});

		render(
			<TestEnvironmentWrapper initialRoute={["/recover/code"]}>
				<Route path="/recover/code" element={<EnterSecurityCode />} />
			</TestEnvironmentWrapper>,
		);

		expect(
			screen.getByText(
				"Please check your phone for a text message with your code. Your code is 6 characters long.",
			),
		).toBeInTheDocument();
	});

	it("renders the input for code", async () => {
		expect(screen.getByPlaceholderText("Enter code")).toBeInTheDocument();
	});

	it("renders the link to resend code", async () => {
		expect(screen.getByText("Didn't get a code")).toBeInTheDocument();
	});

	it("renders the Cancel button", async () => {
		expect(screen.getByText("Cancel")).toBeInTheDocument();
	});

	it("renders the Continue button", async () => {
		expect(screen.getByText("Continue")).toBeInTheDocument();
	});

	it("renders the code input error", async () => {
		const user = userEvent.setup();

		const input = await screen.findByPlaceholderText("Enter code");
		await user.click(input);
		await user.type(input, "12345");

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("Code must be 6 characters")).toBeInTheDocument();
	});

	it("render form error", async () => {
		vi.spyOn(window, "fetch").mockResolvedValueOnce(
			new Response(JSON.stringify({ message: "Invalid token" }), { status: 400 }),
		);

		const user = userEvent.setup();

		const input = await screen.findByPlaceholderText("Enter code");
		await user.click(input);
		await user.type(input, "123456");

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("Invalid token")).toBeInTheDocument();
	});

	it("clicking cancel button redirects to /login", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Cancel"));

		expect(screen.getByText("login")).toBeInTheDocument();
	});

	it("clicking resend code button redirects to /recover/method", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Didn't get a code"));

		expect(screen.getByText("reset password method")).toBeInTheDocument();
	});

	it("clicking continue button redirects to /recover/password", async () => {
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText("Enter code");
		await user.click(input);
		await user.type(input, "123456");

		await user.click(screen.getByText("Continue"));

		expect(screen.getByText("reset password")).toBeInTheDocument();
	});

	it("shows error when code is empty", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Continue"));

		expect(screen.getByText("Code is required")).toBeInTheDocument();
	});

	it("shows error when code is too short", async () => {
		const user = userEvent.setup();

		const input = screen.getByPlaceholderText("Enter code");
		await user.click(input);
		await user.type(input, "12345");

		await user.click(screen.getByText("Continue"));

		expect(screen.getByText("Code must be 6 characters")).toBeInTheDocument();
	});

	it("redirects to /recover if no recoverValue", async () => {
		vi.spyOn(ReactRouter, "useLocation").mockReturnValue({
			state: { data: {} },
			key: "default",
			pathname: "/recover/method",
			search: "",
			hash: "",
		});

		render(
			<TestEnvironmentWrapper initialRoute={["/recover/code"]}>
				<Route path="/recover">
					<Route index element={<>reset password method</>} />
					<Route path="code" element={<EnterSecurityCode />} />
				</Route>
			</TestEnvironmentWrapper>,
		);

		expect(screen.getByText("reset password method")).toBeInTheDocument();
	});
});

afterAll(() => {
	vi.resetAllMocks();
});
