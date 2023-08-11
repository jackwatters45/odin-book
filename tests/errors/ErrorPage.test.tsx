import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router";
import { describe, it, expect } from "vitest";

import TestEnvironmentWrapper from "../utils/setupRender";
import ErrorPage from "../../src/components/errors/ErrorPage";

const renderErrorPageWithProps = (errorProps = {}) => {
	return render(
		<TestEnvironmentWrapper initialRoute={["/", "/error"]}>
			<Route path="/error" element={<ErrorPage {...errorProps} />} />
			<Route path="/" element={<div>Dashboard</div>} />
		</TestEnvironmentWrapper>,
	);
};

describe("<ErrorPage />", () => {
	it("should render the error page", () => {
		renderErrorPageWithProps();

		expect(screen.getByText("Oops! Something went wrong.")).toBeInTheDocument();
	});

	it("should redirect to the dashboard page", async () => {
		renderErrorPageWithProps();

		await userEvent.click(screen.getByText("Go home"));
		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});

	it("should redirect to the previous page", async () => {
		renderErrorPageWithProps();

		await userEvent.click(screen.getByText("Go back"));
		expect(screen.getByText("Dashboard")).toBeInTheDocument();
	});

	it("should not render the go back button", () => {
		renderErrorPageWithProps({ showGoBack: false });

		expect(screen.queryByText("Go back")).not.toBeInTheDocument();
	});

	it("should render the error message", () => {
		renderErrorPageWithProps({ message: "Something went wrong." });

		expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
	});

	it("should render the error code", () => {
		renderErrorPageWithProps({ code: "404" });

		expect(screen.getByText("404")).toBeInTheDocument();
	});

	it("should render the error code and message", () => {
		renderErrorPageWithProps({ code: "404", message: "Page not found." });

		expect(screen.getByText("404")).toBeInTheDocument();
		expect(screen.getByText("Page not found.")).toBeInTheDocument();
	});
});
