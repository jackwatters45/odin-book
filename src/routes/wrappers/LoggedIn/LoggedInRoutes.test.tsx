import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, vi } from "vitest";

import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";
import LoggedInRoute from "./LoggedInRoutes";
import * as exports from "../../../hooks/auth/useCurrentUser";

const renderProtectedRouteWithProps = () => {
	return render(
		<TestEnvironmentWrapper initialRoute={["/test"]}>
			<Route element={<LoggedInRoute />}>
				<Route path="/test" element={<div>Test Component</div>} />
			</Route>
			<Route path="/login" element={<div>Login</div>} />
		</TestEnvironmentWrapper>,
	);
};

describe("LoggedInRoutes", () => {
	it("should render without crashing", () => {
		vi.spyOn(exports, "default").mockReturnValueOnce({ user: true } as never);

		renderProtectedRouteWithProps();

		expect(screen.getByText("Test Component")).toBeInTheDocument();
	});

	it("should redirect to login if user is not logged in", () => {
		renderProtectedRouteWithProps();

		expect(screen.getByText("Login")).toBeInTheDocument();
	});
});
