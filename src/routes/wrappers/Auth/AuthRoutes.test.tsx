import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, vi } from "vitest";

import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";
import AuthRoutes from "./AuthRoutes";
import * as exports from "../../../hooks/useCurrentUser";

const renderProtectedRouteWithProps = () => {
	return render(
		<TestEnvironmentWrapper initialRoute={["/logged-in-route"]}>
			<Route element={<AuthRoutes />}>
				<Route path="/logged-in-route" element={<div>Logged in</div>} />
			</Route>
			<Route path="/" element={<div>Dashboard</div>} />
		</TestEnvironmentWrapper>,
	);
};

describe("AuthRoutes", () => {
	it("should render the component if the user is allowed", () => {
		renderProtectedRouteWithProps();

		expect(screen.getByText("Logged in")).toBeInTheDocument();
	});

	it("should redirect to dashboard if the user is not allowed", () => {
		vi.spyOn(exports, "default").mockReturnValueOnce({ user: true } as never);

		renderProtectedRouteWithProps();

		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});
});
