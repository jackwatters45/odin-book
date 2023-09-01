import {
	describe,
	it,
	expect,
	vi,
	beforeEach,
	beforeAll,
	afterEach,
	afterAll,
} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { faker } from "@faker-js/faker";
import * as ReactRouter from "react-router";

import TestEnvironmentWrapper from "@/config/tests/Utils/setupRender";
import ResetPasswordMethod from ".";

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

const user = {
	id: faker.string.uuid(),
	email: faker.internet.email(),
	phoneNumber: faker.phone.number("+1##########"),
	avatarUrl: faker.image.avatar(),
	fullName: faker.person.fullName(),
	userType: "user",
};

vi.mock("react-router", async () => ({
	...((await vi.importActual("react-router")) as typeof import("react-router")),
	useLocation: () => ({
		state: { data: { user } },
		key: "default",
		pathname: "/recover/method",
		search: "",
		hash: "",
	}),
}));

describe("ResetPasswordMethod", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover/method"]}>
				<Route path="/login" element={<>login component</>} />
				<Route path="/recover">
					<Route index element={<>Find your account</>} />
					<Route path="method" element={<ResetPasswordMethod />} />
					<Route path="code" element={<>Enter security code</>} />
				</Route>
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the heading", () => {
		const heading = screen.getByText("Reset your password");
		expect(heading).toBeInTheDocument();
	});

	it("renders user info", () => {
		const userPreview = screen.getByText(user.fullName);
		expect(userPreview).toBeInTheDocument();

		const userAvatarUrl = screen.getByAltText("User avatar");
		expect(userAvatarUrl).toBeInTheDocument();

		const userType = screen.getByText(`Odin book ${user.userType}`);
		expect(userType).toBeInTheDocument();
	});

	it("renders the email input", () => {
		const input = screen.getByLabelText(/send code via email/i);
		expect(input).toBeInTheDocument();
	});

	it("renders the phone number input", () => {
		const input = screen.getByLabelText(/send code via sms/i);
		expect(input).toBeInTheDocument();
	});

	it("renders the password input", () => {
		const input = screen.getByLabelText(/password/i);
		expect(input).toBeInTheDocument();
	});

	it("renders the continue button", () => {
		const button = screen.getByText("Continue");
		expect(button).toBeInTheDocument();
	});

	it("renders the not you button", () => {
		const button = screen.getByText("Not you?");
		expect(button).toBeInTheDocument();
	});

	it("renders the method input error", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("Please select a method")).toBeInTheDocument();
	});

	it("render form error", async () => {
		vi.spyOn(window, "fetch").mockResolvedValueOnce(
			new Response(JSON.stringify({ message: "Invalid token" }), { status: 400 }),
		);

		const user = userEvent.setup();

		await user.click(screen.getByLabelText(/send code via email/i));

		await user.click(screen.getByText("Continue"));

		expect(await screen.findByText("Invalid token")).toBeInTheDocument();
	});

	it("selecting email should redirect to enter security code", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByLabelText(/send code via email/i));

		await user.click(screen.getByText("Continue"));

		expect(screen.getByText("Enter security code")).toBeInTheDocument();
	});

	it("selecting phone number should redirect to enter security code", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText(/send code via sms/i));

		await user.click(screen.getByText("Continue"));

		expect(screen.getByText("Enter security code")).toBeInTheDocument();
	});

	it("selecting password should redirect to login", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByLabelText(/password/i));

		await user.click(screen.getByText("Continue"));
		expect(screen.getByText("login component")).toBeInTheDocument();
	});

	it("clicking not you button redirects to /recover", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Not you?"));

		expect(screen.getByText("Find your account")).toBeInTheDocument();
	});

	it("redirects to /recover if no user data is passed", async () => {
		vi.spyOn(ReactRouter, "useLocation").mockReturnValue({
			state: { data: {} },
			key: "default",
			pathname: "/recover/method",
			search: "",
			hash: "",
		});

		render(
			<TestEnvironmentWrapper initialRoute={["/recover/method"]}>
				<Route path="/recover">
					<Route index element={<>Find your account</>} />
					<Route path="method" element={<ResetPasswordMethod />} />
				</Route>
			</TestEnvironmentWrapper>,
		);

		expect(screen.getByText("Find your account")).toBeInTheDocument();
	});
});

afterAll(() => {
	vi.resetAllMocks();
});
