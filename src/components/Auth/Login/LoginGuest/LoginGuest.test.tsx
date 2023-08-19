import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import LoginGuest from ".";

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

	it("should login as a guest", async () => {
		expect(screen.getByText("Login as a guest")).toBeInTheDocument();
	});
});
