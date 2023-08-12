import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, beforeEach } from "vitest";

import Layout from "./Layout";
import TestEnvironmentWrapper from "../../../../config/tests/Utils/setupRender";

describe("Layout", () => {
	beforeEach(() => {
		render(
			<TestEnvironmentWrapper initialRoute={["/"]}>
				<Route path="/" element={<Layout />}>
					<Route index element={<div>Test</div>} />
				</Route>
			</TestEnvironmentWrapper>,
		);
	});

	it("should render the nav", () => {
		expect(screen.getByAltText("Odin Book")).toBeInTheDocument();
	});

	it("should render the outlet", () => {
		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
