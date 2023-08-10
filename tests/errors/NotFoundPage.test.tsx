import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router";

import NotFoundPage from "../../src/components/errors/NotFoundPage";
import TestEnvironmentWrapper from "../utils/setupRender";

describe("NotFoundPage", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/", "/not-found"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<>login page</>} />
				<Route path="/not-found" element={<NotFoundPage />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing + displays a not found message", () => {
		expect(
			screen.getByText(/the page you're looking for does not exist/i),
		).toBeInTheDocument();
	});

	it("provides a return home link", async () => {
		expect(screen.getByText(/go home/i)).toBeInTheDocument();

		const user = userEvent.setup();
		await user.click(screen.getByText(/go home/i));

		expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
		expect(screen.queryByText(/login page/i)).not.toBeInTheDocument();
	});

	it("provides a return link that redirects to the previous page", async () => {
		expect(screen.getByText(/go back/i)).toBeInTheDocument();

		const user = userEvent.setup();
		await user.click(screen.getByText(/go back/i));

		expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
		expect(screen.queryByText(/login page/i)).not.toBeInTheDocument();
	});
});
