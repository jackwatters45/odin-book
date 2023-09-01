import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { beforeEach, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";

import CreateAccount from "./CreateAccount";
import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";

describe("CreateAccountForm", () => {
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(async () => {
		render(
			<TestEnvironmentWrapper initialRoute={["/create-account"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/create-account" element={<CreateAccount />} />
			</TestEnvironmentWrapper>,
		);

		const birthday = new Date(2000, 1, 1);

		user = userEvent.setup();

		await user.type(
			screen.getByLabelText(/mobile number or email:/i),
			faker.internet.email(),
		);
		await user.type(screen.getByLabelText(/first name/i), faker.person.firstName());
		await user.type(screen.getByLabelText(/last name/i), faker.person.lastName());

		await user.selectOptions(screen.getByLabelText(/day/i), String(birthday.getDate()));
		await user.selectOptions(
			screen.getByLabelText(/month/i),
			String(birthday.getMonth()),
		);
		await user.selectOptions(
			screen.getByLabelText(/year/i),
			String(birthday.getFullYear()),
		);

		const radioButtons = screen.getAllByRole("radio");
		const randomRadioButton =
			radioButtons[Math.floor(Math.random() * radioButtons.length)];
		userEvent.click(randomRadioButton);
	});

	it("renders without crashing", async () => {
		expect(screen.getByLabelText(/mobile number or email:/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/new password/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/day/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/month/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/year/i)).toBeInTheDocument();
		expect(screen.getAllByText(/sign up/i)).toHaveLength(2);
	});

	it("shows error when input value(s) are too short", async () => {
		const shortPassword = faker.internet.password({ length: 7 });

		await user.type(screen.getByLabelText(/new password/i), shortPassword);
		await user.click(screen.getByRole("button", { name: /sign up/i }));

		expect(
			await screen.findByText(/password should be at least 8 characters long/i),
		).toBeInTheDocument();
	});

	it("shows error when input value(s) are too long", async () => {
		const longPassword = faker.internet.password({ length: 101 });

		await user.type(screen.getByLabelText(/new password/i), longPassword);

		await user.click(screen.getByRole("button", { name: /sign up/i }));

		expect(
			await screen.findByText(/password should be at most 100 characters long/i),
		).toBeInTheDocument();
	});

	it("submits the form with valid values", async () => {
		const validPassword = "Password1$";

		await user.type(screen.getByLabelText(/new password/i), validPassword);

		await user.click(screen.getByRole("button", { name: /sign up/i }));

		expect(await screen.queryByText(/errors/i)).not.toBeInTheDocument();

		expect(await screen.findByText(/dashboard/i)).toBeInTheDocument();
	});
});
