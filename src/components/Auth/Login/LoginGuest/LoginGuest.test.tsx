import { describe, it, expect, beforeEach, vi, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "@/config/tests/Utils/setupRender";
import LoginGuest from ".";
import userEvent from "@testing-library/user-event";

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

describe("Guest Login", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<LoginGuest />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing", async () => {
		expect(screen.getByText("Just looking around?")).toBeInTheDocument();
	});

	it("should login as a guest -> redirect to dashboard", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByText("Login as a guest"));

		expect(screen.getByText("dashboard")).toBeInTheDocument();
	});
});

afterAll(() => {
	vi.resetAllMocks();
});
