import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, vi } from "vitest";

import TestEnvironmentWrapper from "../../../config/tests/Utils/setupRender";
import AdminRoutes from "./AdminRoutes";
import * as exports from "../../../hooks/auth/useCurrentUser";

const renderProtectedRouteWithProps = () => {
	return render(
		<TestEnvironmentWrapper initialRoute={["/admin"]}>
			<Route element={<AdminRoutes />}>
				<Route path="/admin" element={<div>Admin</div>} />
			</Route>
			<Route path="/unauthorized" element={<div>Unauthorized Page</div>} />
		</TestEnvironmentWrapper>,
	);
};

describe("AdminRoutes", () => {
	it("should render the component if the user is admin", () => {
		vi.spyOn(exports, "default").mockReturnValueOnce({
			user: { userType: "admin" },
		} as never);

		renderProtectedRouteWithProps();

		expect(screen.getByText("Admin")).toBeInTheDocument();
	});

	it("should redirect to unauthorized page if the user is not admin", () => {
		renderProtectedRouteWithProps();

		expect(screen.getByText("Unauthorized Page")).toBeInTheDocument();
	});
});
