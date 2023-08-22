import { describe, it, expect, beforeEach, vi, beforeAll, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import * as ReactRouter from "react-router";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import ChooseNewPassword from ".";

// mock successful fetch
let originalFetch: typeof window.fetch;

beforeAll(() => {
	originalFetch = window.fetch;
});

beforeEach(() => {
	window.fetch = vi
		.fn()
		.mockResolvedValue(Promise.resolve(new Response(JSON.stringify({}))));
});

afterEach(() => {
	window.fetch = originalFetch;
});

vi.mock("react-router", async () => ({
	...((await vi.importActual("react-router")) as typeof import("react-router")),
	useLocation: () => ({
		state: { data: { token: "123" } },
		key: "default",
		pathname: "/recover/method",
		search: "",
		hash: "",
	}),
}));

describe("<ChooseNewPassword />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover/password"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<>login</>} />
				<Route path="/recover">
					<Route path="password" element={<ChooseNewPassword />} />
				</Route>
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the heading", async () => {
		expect(await screen.findByRole("heading")).toHaveTextContent("Choose a new password");
	});

	it("renders navigation", async () => {
		expect(await screen.getByAltText("Odin Book")).toBeInTheDocument();
	});

	it("renders hidden input for username", async () => {
		expect(await screen.findByPlaceholderText("Enter password")).toBeInTheDocument();
	});

	it("renders the input for password", async () => {
		expect(await screen.findByPlaceholderText("Enter password")).toBeInTheDocument();
	});

	it("renders the label for password", async () => {
		expect(
			await screen.findByText(
				"Create a new password that is at least 8 characters long. A strong password is combination of letters, numbers, and punctuation marks.",
			),
		).toBeInTheDocument();
	});

	it("renders the button to show password", async () => {
		expect(await screen.findByText("Show")).toBeInTheDocument();
	});

	it("renders the button to hide password", async () => {
		const user = userEvent.setup();

		await user.click(await screen.findByText("Show"));

		expect(await screen.findByText("Hide")).toBeInTheDocument();
	});

	it("renders the button to skip", async () => {
		expect(await screen.findByText("Skip")).toBeInTheDocument();
	});

	it("renders the button to continue", async () => {
		expect(await screen.findByText("Continue")).toBeInTheDocument();
	});

	it("renders the password input error", async () => {
		const user = userEvent.setup();

		const input = await screen.findByPlaceholderText("Enter password");
		await user.click(input);
		await user.type(input, "123456");

		await user.click(screen.getByText("Continue"));

		expect(
			await screen.findByText("Password should be at least 8 characters long."),
		).toBeInTheDocument();
	});

	it("render form error", async () => {
		vi.spyOn(window, "fetch").mockResolvedValueOnce(
			new Response(JSON.stringify({ message: "Invalid token" }), { status: 400 }),
		);

		const user = userEvent.setup();

		const input = await screen.findByPlaceholderText("Enter password");
		await user.click(input);

		await user.type(input, "Password1$");

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("Invalid token")).toBeInTheDocument();
	});

	it("logs in user when click skip", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Skip"));

		expect(await screen.findByText("dashboard")).toBeInTheDocument();
	});

	it("logs in user and changes password when click continue", async () => {
		const user = userEvent.setup();

		const input = await screen.findByPlaceholderText("Enter password");

		await user.click(input);
		await user.type(input, "Password1$");

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("dashboard")).toBeInTheDocument();
	});

	it("redirects to /recover if no token is present", async () => {
		vi.spyOn(ReactRouter, "useLocation").mockReturnValue({
			state: { data: {} },
			key: "default",
			pathname: "/recover/password",
			search: "",
			hash: "",
		});

		render(
			<TestEnvironmentWrapper initialRoute={["/recover/password"]}>
				<Route path="/recover">
					<Route index element={<>find user</>} />
					<Route path="password" element={<ChooseNewPassword />} />
				</Route>
			</TestEnvironmentWrapper>,
		);

		expect(await screen.findByText("find user")).toBeInTheDocument();
	});
});
