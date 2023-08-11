import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, vi } from "vitest";

import TestEnvironmentWrapper from "../utils/setupRender";
import LoggedInRoute from "../../src/Routes/Wrappers/LoggedInRoute";
import * as exports from "../../src/hooks/useCurrentUser";

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

describe("LoggedInRoute", () => {
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
