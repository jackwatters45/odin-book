import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect } from "vitest";

import TestEnvironmentWrapper from "../Utils/setupRender";
import ProtectedRoute from "../../src/routes/wrappers/ProtectedRoute";

const renderProtectedRouteWithProps = (
	Props = { isAllowed: true, redirectPath: "/" },
) => {
	return render(
		<TestEnvironmentWrapper initialRoute={["/test"]}>
			<Route element={<ProtectedRoute {...Props} />}>
				<Route path="/test" element={<div>Test Component</div>} />
			</Route>
			<Route path="/" element={<div>Dashboard</div>} />
			<Route path="/login" element={<div>Login</div>} />
		</TestEnvironmentWrapper>,
	);
};

describe("ProtectedRoute", () => {
	it("should render the component if the user is allowed", () => {
		renderProtectedRouteWithProps({ isAllowed: true, redirectPath: "/" });

		expect(screen.getByText("Test Component")).toBeInTheDocument();
	});

	it("should redirect the user if the user is not allowed", () => {
		renderProtectedRouteWithProps({ isAllowed: false, redirectPath: "/" });

		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});

	it("should redirect the user to the redirect path if the user is not allowed", () => {
		renderProtectedRouteWithProps({ isAllowed: false, redirectPath: "/login" });

		expect(screen.getByText("Login")).toBeInTheDocument();
	});
});
