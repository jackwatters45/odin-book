import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";

import Unauthorized from "./Unauthorized";
import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";

describe("UnauthorizedPage", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/", "/unauthorized"]}>
				<Route path="/" element={<>dashboard</>} />
				<Route path="/login" element={<>login page</>} />
				<Route path="/unauthorized" element={<Unauthorized />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders without crashing + displays an unauthorized message", () => {
		expect(
			screen.getByText(/you are not authorized to view this page/i),
		).toBeInTheDocument();
	});

	it("provides a  login link", async () => {
		expect(screen.getByText(/login/i)).toBeInTheDocument();

		const user = userEvent.setup();
		await user.click(screen.getByText(/login/i));

		expect(screen.getByText(/login page/i)).toBeInTheDocument();
	});

	it("provides a return link that redirects to the previous page", async () => {
		expect(screen.getByText(/return/i)).toBeInTheDocument();

		const user = userEvent.setup();
		await user.click(screen.getByText(/return/i));

		expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
		expect(screen.queryByText(/login page/i)).not.toBeInTheDocument();
	});
});
