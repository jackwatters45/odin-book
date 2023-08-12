import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { faker } from "@faker-js/faker";

import Login from "./Login";
import { apiBaseUrl } from "../../../../config/envVariables";
import TestEnvironmentWrapper from "../../../../config/tests/Utils/setupRender";

describe("Login", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<Login />} />
				<Route path="/login/recover" element={<>recover password</>} />
				<Route path="/create-account" element={<>create account</>} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing", async () => {
		expect(screen.getByLabelText(/email or phone number/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByText(/login/i)).toBeInTheDocument();
	});

	it("shows error when input values are too short", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.lorem.word(4);
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = faker.internet.password({ length: 7 });
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText(/email or phone number must be at least 5 characters/i),
		).toBeInTheDocument();
		expect(
			await screen.findByText(/password must be at least 8 characters/i),
		).toBeInTheDocument();
	});

	it("shows error when input values are too long", async () => {
		const user = userEvent.setup();

		const fakeEmail = faker.string.alphanumeric(51);
		await user.type(screen.getByLabelText(/email or phone number/i), fakeEmail);

		const fakePassword = faker.internet.password({ length: 51 });
		await user.type(screen.getByLabelText(/password/i), fakePassword);

		await user.click(screen.getByText(/login/i));

		expect(
			await screen.findByText(/email or phone number can't exceed 50 characters/i),
		).toBeInTheDocument();
		expect(
			await screen.findByText(/password can't exceed 50 characters/i),
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

		await user.click(screen.getByText(/login/i));

		expect(await screen.findByText(/dashboard/i)).toBeInTheDocument();
	});

	it("navigate to create account page", async () => {
		const user = userEvent.setup();

		user.click(screen.getByText(/create new account/i));

		expect(await screen.findByText(/create account/i)).toBeInTheDocument();
	});

	it("navigate to forgot password page", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText(/forgot password/i));

		expect(await screen.findByText(/recover password/i)).toBeInTheDocument();
	});
});
