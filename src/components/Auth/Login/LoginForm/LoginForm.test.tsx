import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { faker } from "@faker-js/faker";

import LoginForm from "./LoginForm";
import { apiBaseUrl } from "@/config/envVariables";
import TestEnvironmentWrapper from "@/config/tests/Utils/setupRender";

describe("LoginForm", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/recover" element={<>recover password</>} />
				<Route path="/create-account" element={<>create account</>} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing", async () => {
		expect(screen.getByLabelText(/email or phone number/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByText(/login/i)).toBeInTheDocument();
	});

	it("shows error when username is empty", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Email or phone number is required."),
		).toBeInTheDocument();
	});

	it("shows error when phone number is not valid", async () => {
		const user = userEvent.setup();

		const fakePhoneNumber = faker.phone.number("##########") + "123";
		await user.type(screen.getByLabelText(/email or phone number/i), fakePhoneNumber);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(await screen.findByText("Phone number is not valid.")).toBeInTheDocument();
	});

	it("shows error when email is too short", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email().slice(0, 3) + "@";
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Email address should be at least 5 characters."),
		).toBeInTheDocument();
	});

	it("shows error when email is too long", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.string.alphanumeric({ length: 255 }) + faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Email address should be less than 255 characters."),
		).toBeInTheDocument();
	});

	it("shows error when email starts or ends with .", async () => {
		const user = userEvent.setup();

		const fakeEmail = "." + faker.internet.email().slice(0, 254);
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Email address should not start or end with a dot."),
		).toBeInTheDocument();
	});

	it("shows error when email has consecutive dots", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email().replace(".", "..");
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Email address should not have consecutive dots."),
		).toBeInTheDocument();
	});

	it("shows error when email is invalid format", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email().replace("@", "@@");
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(await screen.findByText("Invalid email format.")).toBeInTheDocument();
	});

	it("shows error when password is empty", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		await user.click(screen.getByText(/login/i));

		expect(await screen.findByText("Password is required.")).toBeInTheDocument();
	});

	it("shows error when password is too short", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = faker.internet.password({ length: 7 });
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Password should be at least 8 characters long."),
		).toBeInTheDocument();
	});

	it("shows error when password is too long", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = faker.internet.password({ length: 101 });
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Password should be at most 100 characters long."),
		).toBeInTheDocument();
	});

	it("shows error when password does not include a special char", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password1";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText(
				"Password must contain at least one special character (e.g. !@#$%^&*?()).",
			),
		).toBeInTheDocument();
	});

	it("shows error when password does not include a number", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "Password$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Password must contain at least one number."),
		).toBeInTheDocument();
	});

	it("shows error when password does not include an uppercase letter", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "password1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Password must contain at least one uppercase letter."),
		).toBeInTheDocument();
	});

	it("shows error when password does not include a lowercase letter", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.internet.email();
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = "PASSWORD1$";
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText("Password must contain at least one lowercase letter."),
		).toBeInTheDocument();
	});

	it("submits the form with valid values", async () => {
		const fakeEmail = faker.internet.email();
		const fakePassword = "Password1$";

		try {
			const res = await fetch(`${apiBaseUrl}/auth/signup`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					username: fakeEmail,
					password: fakePassword,
					birthday: faker.date.past({ refDate: new Date(2000, 0, 1) }),
				}),
			});

			if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);
		} catch (err) {
			throw new Error(err);
		}

		const user = userEvent.setup();

		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await await user.click(screen.getByText(/login/i));

		expect(await screen.findByText(/dashboard/i)).toBeInTheDocument();
	});

	it("navigate to create account page", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText(/create new account/i));

		expect(await screen.findByText(/create account/i)).toBeInTheDocument();
	});

	it("navigate to forgot password page", async () => {
		const user = userEvent.setup();

		await await user.click(screen.getByText(/forgot password/i));

		expect(await screen.findByText(/recover password/i)).toBeInTheDocument();
	});
});
