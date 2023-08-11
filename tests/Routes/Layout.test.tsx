import { render, screen } from "@testing-library/react";
import { Route } from "react-router";
import { describe, it, expect, beforeEach, vi } from "vitest";

import TestEnvironmentWrapper from "../utils/setupRender";
import Layout from "../../src/Routes/Wrappers/Layout";

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

	vi.mock("../../src/components/Nav/NavComponent", () => ({
		default: function MockedNav() {
			return <div>nav</div>;
		},
	}));

	it("should render the nav", () => {
		expect(screen.getByText("nav")).toBeInTheDocument();
	});

	it("should render the outlet", () => {
		expect(screen.getByText("Test")).toBeInTheDocument();
	});
});
