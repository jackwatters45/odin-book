import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Route } from "react-router-dom";

import TestEnvironmentWrapper from "../../../../../config/tests/Utils/setupRender";
import ForgotPasswordNav from "./ForgotPasswordNav";

describe("<ForgotPasswordNav />", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover"]}>
				<Route path="/recover" element={<ForgotPasswordNav />} />
			</TestEnvironmentWrapper>,
		);
	});

	it("renders the image", () => {
		const image = screen.getByAltText("Odin Book");
		expect(image).toBeInTheDocument();
	});

	it("renders the Login component when includeLogin is true", () => {
		render(
			<TestEnvironmentWrapper initialRoute={["/recover"]}>
				<Route path="/recover" element={<ForgotPasswordNav includeLogin={true} />} />
			</TestEnvironmentWrapper>,
		);

		expect(screen.getByText("Forgot Account")).toBeInTheDocument();
	});

	it("does not render the Login component when includeLogin is false", () => {
		expect(screen.queryByText("Forgot Account")).not.toBeInTheDocument();
	});
});
