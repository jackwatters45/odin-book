import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import ForgotPasswordNav from "./ForgotPasswordNav";

describe("<ForgotPasswordNav />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/login/recover"]}>
				<Route path="/login/recover" element={<ForgotPasswordNav />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the placeholder image", () => {
		const image = screen.getByAltText("Odin Book");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
	});

	it("renders the Login component with correct forgotType", () => {
		expect(screen.getByText("Forgot Account")).toBeInTheDocument();
	});
});
